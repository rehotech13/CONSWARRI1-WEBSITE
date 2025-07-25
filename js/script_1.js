
                var css = '';
                if (document.querySelector('#_style_UVRH7xy')) css = document.querySelector('#_style_UVRH7xy').innerHTML;
                if (css !== '') {
                    var head = document.getElementsByTagName('head')[0];
                    var s = document.createElement('style');
                    s.appendChild(document.createTextNode(css));
                    head.appendChild(s);
                }
                var navbarReady = function(fn) {
                    var stateCheck = setInterval(function() {
                        if (typeof NavBar === "undefined") return;
                        clearInterval(stateCheck);
                        try {
                            fn()
                        } catch (e) {}
                    }, 1);
                };
                navbarReady(function() {
                    var obj = new NavBar({
                        onSearch: (keywords) => {
                            if (!keywords || keywords.trim() === '') {
                                const modalHtml = '<div class="is-modal search-result" style="z-index:10002;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;"><div style="background:white;max-width:800px;width:90%;height:80vh;padding:0;box-sizing:border-box;position:relative;border-radius:8px;box-shadow:0 2px 20px rgba(0,0,0,0.2);"><div class="is-modal-bar" style="position:absolute;top:0;left:0;width:calc(100% - 30px);z-index:1;background:#f8f8f8;padding:15px;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;align-items:center;"><div style="font-size:16px;font-weight:500;">Search</div><button class="search-close-btn" style="padding:8px 12px;font-size:20px;cursor:pointer;background:none;border:none;">&times;</button></div><div style="margin:60px 0 0;height:calc(100% - 60px);overflow-y:auto;padding:20px;"><div class="search-results"><div style="padding:20px;text-align:center;color:#666;">Please enter a search term</div></div></div></div></div>';
                                const modal = document.createElement('div');
                                modal.innerHTML = modalHtml;
                                document.body.appendChild(modal);
                                modal.querySelector('.search-close-btn').onclick = function() {
                                    document.body.removeChild(modal);
                                };
                                modal.querySelector('.is-modal.search-result').onclick = function(e) {
                                    if (e.target === this) document.body.removeChild(modal);
                                };
                                return;
                            }
                            console.log('Search triggered with:', keywords);

                            function searchContent(query) {
                                const contentElements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article', 'section', 'div'];
                                const content = Array.from(document.body.querySelectorAll(contentElements.join(', '))).filter(element => {
                                    return !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(element.tagName) && Array.from(element.childNodes).some(node => node.nodeType === 3 && node.textContent.trim() !== '') && element.offsetParent !== null && !element.querySelector(contentElements.join(','));
                                }).map(element => ({
                                    text: element.textContent.trim(),
                                    element: element
                                }));
                                const seen = new Set();
                                const uniqueContent = content.filter(item => {
                                    const cleanText = item.text.toLowerCase().replace(/\s+/g, ' ').trim();
                                    if (seen.has(cleanText)) return false;
                                    seen.add(cleanText);
                                    return true;
                                });
                                const results = uniqueContent.filter(item => {
                                    const searchTerms = query.toLowerCase().split(' ');
                                    return searchTerms.every(term => item.text.toLowerCase().includes(term));
                                }).slice(0, 10);
                                return results.map(result => {
                                    const text = result.text;
                                    const index = text.toLowerCase().indexOf(query.toLowerCase());
                                    const start = Math.max(0, index - 50);
                                    const end = Math.min(text.length, index + query.length + 50);
                                    let excerpt = text.substring(start, end);
                                    if (start > 0) excerpt = '...' + excerpt;
                                    if (end < text.length) excerpt += '...';
                                    const highlightedExcerpt = excerpt.replace(new RegExp(query, 'gi'), '<mark style="background-color: yellow; padding: 0 2px;">[%CONTENT%]</mark>');
                                    return {
                                        excerpt: highlightedExcerpt,
                                        element: result.element
                                    };
                                });
                            }
                            const results = searchContent(keywords);
                            const resultsHtml = results.length > 0 ? results.map(result => '<div class="search-result-item" style="margin-bottom: 15px; padding: 10px; border-radius: 4px; background: #f5f5f5;"><div style="margin-bottom: 5px;">' + result.excerpt + '</div></div>').join('') : '<div style="padding: 20px; text-align: center; color: #666;">No results found</div>';
                            const modalHtml = '<div class="is-modal search-result" style="z-index:10002;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;"><div style="background:white;max-width:800px;width:90%;height:80vh;padding:0;box-sizing:border-box;position:relative;border-radius:8px;box-shadow:0 2px 20px rgba(0,0,0,0.2);"><div class="is-modal-bar" style="position:absolute;top:0;left:0;width:calc(100% - 30px);z-index:1;background:#f8f8f8;padding:15px;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;align-items:center;"><div style="font-size:16px;font-weight:500;">Search Results for: "' + keywords + '"</div><button class="search-close-btn" style="padding:8px 12px;font-size:20px;cursor:pointer;background:none;border:none;">&times;</button></div><div style="margin:60px 0 0;height:calc(100% - 60px);overflow-y:auto;padding:20px;"><div class="search-results">' + resultsHtml + '</div></div></div></div>';
                            const modal = document.createElement('div');
                            modal.innerHTML = modalHtml;
                            document.body.appendChild(modal);
                            modal.querySelectorAll('.search-result-item').forEach((item, index) => {
                                item.style.cursor = 'pointer';
                                item.addEventListener('click', () => {
                                    const targetElement = results[index].element;
                                    document.body.removeChild(modal);
                                    targetElement.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center'
                                    });
                                    targetElement.style.transition = 'background-color 0.3s';
                                    targetElement.style.backgroundColor = '#fff3cd';
                                    setTimeout(() => {
                                        targetElement.style.backgroundColor = '';
                                    }, 2000);
                                });
                            });
                            modal.querySelector('.search-close-btn').onclick = function() {
                                document.body.removeChild(modal);
                            };
                            modal.querySelector('.is-modal.search-result').onclick = function(e) {
                                if (e.target === this) document.body.removeChild(modal);
                            };
                        }
                    });
                    obj.init();
                    console.log('NavBar initialized');
                });
            