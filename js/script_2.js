
                var css = document.querySelector('#_style_dBuTcLv').innerHTML;
                var head = document.getElementsByTagName('head')[0];
                var s = document.createElement('style');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);

                var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
                    '<defs>' +
                    '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
                    '<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
                    '</symbol>' +
                    '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
                    '<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
                    '</symbol>' +
                    '</defs>' +
                    '</svg>';
                var pre = document.querySelector('#ion-ios-arrow-left');
                if (!pre) {
                    document.body.insertAdjacentHTML('beforeend', svgDef);
                }

                var docReady = function(fn) {
                    var stateCheck = setInterval(function() {
                        // if (typeof Glide === 'undefined') return;
                        var waitSlider = false;
                        if (typeof Glide !== 'undefined') {
                            if ((new Glide).mount) {
                                // Do Nothing 
                            } else {
                                waitSlider = true;
                            }
                        } else {
                            waitSlider = true;
                        }
                        if (waitSlider) return;
                        if (typeof skrollrr === 'undefined') return;
                        if (typeof skrollrr.lax === 'undefined') return;

                        clearInterval(stateCheck);
                        try {
                            fn();
                        } catch (e) {}
                    }, 1);
                };
                docReady(function() {
                    const glideSlide = document.querySelector("#dBuTcLv");
                    if (!glideSlide) return;
                    glideSlide.style.display = "";

                    const glideSlides = document.querySelectorAll('#dBuTcLv .glide__slide');

                    const perView = 3;

                    glideSlides.forEach(slide => {
                        let video = slide.querySelector('video');
                        if (video) changeVideo(video);
                    });

                    window.addEventListener('resize', () => {
                        glideSlides.forEach(slide => {
                            let video = slide.querySelector('video');
                            if (video) changeVideo(video);
                        });
                    });

                    function changeVideo(video) {
                        if (!video) return;
                        let changed = false;
                        let source = video.querySelector('source');
                        let vidDefault = source.getAttribute('data-default');
                        let vid240 = source.getAttribute('data-240');
                        let vid360 = source.getAttribute('data-360');
                        let vid480 = source.getAttribute('data-480');
                        let vid540 = source.getAttribute('data-540');
                        let vid720 = source.getAttribute('data-720');
                        let vid1080 = source.getAttribute('data-1080');
                        let vid1440 = source.getAttribute('data-1440');
                        let vid2160 = source.getAttribute('data-2160');
                        let vW = window.innerWidth;
                        if (vW <= 426) {
                            if (vid240) {
                                if (source.getAttribute('src') !== vid240) {
                                    source.setAttribute('src', vid240);
                                    changed = true;
                                } else return;
                            } else if (vid360) {
                                if (source.getAttribute('src') !== vid360) {
                                    source.setAttribute('src', vid360);
                                    changed = true;
                                } else return;
                            } else if (vid480) {
                                if (source.getAttribute('src') !== vid480) {
                                    source.setAttribute('src', vid480);
                                    changed = true;
                                } else return;
                            } else if (vid540) {
                                if (source.getAttribute('src') !== vid540) {
                                    source.setAttribute('src', vid540);
                                    changed = true;
                                } else return;
                            } else if (vid720) {
                                if (source.getAttribute('src') !== vid720) {
                                    source.setAttribute('src', vid720);
                                    changed = true;
                                } else return;
                            }
                        } else if (426 < vW && vW <= 640) {
                            if (vid360) {
                                if (source.getAttribute('src') !== vid360) {
                                    source.setAttribute('src', vid360);
                                    changed = true;
                                } else return;
                            } else if (vid480) {
                                if (source.getAttribute('src') !== vid480) {
                                    source.setAttribute('src', vid480);
                                    changed = true;
                                } else return;
                            } else if (vid540) {
                                if (source.getAttribute('src') !== vid540) {
                                    source.setAttribute('src', vid540);
                                    changed = true;
                                } else return;
                            } else if (vid720) {
                                if (source.getAttribute('src') !== vid720) {
                                    source.setAttribute('src', vid720);
                                    changed = true;
                                } else return;
                            }
                        } else if (640 < vW && vW <= 854) {
                            if (vid480) {
                                if (source.getAttribute('src') !== vid480) {
                                    source.setAttribute('src', vid480);
                                    changed = true;
                                } else return;
                            } else if (vid540) {
                                if (source.getAttribute('src') !== vid540) {
                                    source.setAttribute('src', vid540);
                                    changed = true;
                                } else return;
                            } else if (vid720) {
                                if (source.getAttribute('src') !== vid720) {
                                    source.setAttribute('src', vid720);
                                    changed = true;
                                } else return;
                            }
                        } else if (854 < vW && vW <= 960) {
                            if (vid540) {
                                if (source.getAttribute('src') !== vid540) {
                                    source.setAttribute('src', vid540);
                                    changed = true;
                                } else return;
                            } else if (vid720) {
                                if (source.getAttribute('src') !== vid720) {
                                    source.setAttribute('src', vid720);
                                    changed = true;
                                } else return;
                            }
                        } else if (vW > 960 && vW <= 1280) {
                            if (vid720) {
                                if (source.getAttribute('src') !== vid720) {
                                    source.setAttribute('src', vid720);
                                    changed = true;
                                } else return;
                            }
                        } else if (1280 < vW && vW <= 1920) {
                            if (vid1080) {
                                if (source.getAttribute('src') !== vid1080) {
                                    source.setAttribute('src', vid1080);
                                    changed = true;
                                } else return;
                            }
                        } else if (1920 < vW && vW <= 2560) {
                            if (vid1440) {
                                if (source.getAttribute('src') !== vid1440) {
                                    source.setAttribute('src', vid1440);
                                    changed = true;
                                } else return;
                            }
                        } else if (2560 < vW) {
                            if (vid2160) {
                                if (source.getAttribute('src') !== vid2160) {
                                    source.setAttribute('src', vid2160);
                                    changed = true;
                                } else return;
                            } else if (vid1440) {
                                if (source.getAttribute('src') !== vid1440) {
                                    source.setAttribute('src', vid1440);
                                    changed = true;
                                } else return;
                            }
                        }

                        if (changed) {
                            video.pause();
                            video.currentTime = 0;
                            video.load();
                            if (video.closest('.play')) {
                                video.play();
                            }
                        } else {
                            if (source.getAttribute('src') !== vidDefault) {
                                video.pause();
                                video.currentTime = 0;
                                source.setAttribute('src', vidDefault);
                                video.load();
                            }
                        }
                    }

                    function stopVideo(slide) {
                        const video = slide.querySelector('video');
                        if (video) {
                            video.pause();
                            video.currentTime = 0;
                        }
                        slide.classList.remove('active');
                        slide.classList.remove('play');
                    }

                    function playVideo(slide) {
                        let video = slide.querySelector('video');
                        if (video) {
                            video.play();
                        }
                        slide.classList.add('play');
                    }

                    function coverflow(index) {
                        let activeSlide = glideSlides[index];
                        let nextSlide = activeSlide.nextElementSibling;
                        let next2Slide;
                        if (nextSlide) next2Slide = nextSlide.nextElementSibling;
                        let next3Slide;
                        if (next2Slide) next3Slide = next2Slide.nextElementSibling;

                        activeSlide.classList.remove('glide__slide--previous');
                        activeSlide.classList.remove('glide__slide--following');

                        if (activeSlide.nextElementSibling) {
                            activeSlide.nextElementSibling.classList.remove('glide__slide--previous');
                            activeSlide.nextElementSibling.classList.remove('glide__slide--following');
                            activeSlide.nextElementSibling.classList.add('glide__slide--following');
                        }

                        if (activeSlide.previousElementSibling) {
                            activeSlide.previousElementSibling.classList.remove('glide__slide--previous');
                            activeSlide.previousElementSibling.classList.remove('glide__slide--following');
                            activeSlide.previousElementSibling.classList.add('glide__slide--previous');
                        }

                        if (perView === 1 || perView === 2 || perView === 3 || perView === 4) playVideo(activeSlide);
                        if ((perView === 2 || perView === 3 || perView === 4) && nextSlide) playVideo(nextSlide);
                        if ((perView === 3 || perView === 4) && next2Slide) playVideo(next2Slide);
                        if (perView === 4 && next3Slide) playVideo(next3Slide);

                        activeSlide.classList.add('active');

                        let elms = activeSlide.parentNode.querySelectorAll('.glide__slide');
                        elms.forEach(elm => {
                            if (elm === activeSlide) return;
                            if (perView === 2)
                                if (elm === activeSlide || elm === nextSlide) return;
                            if (perView === 3)
                                if (elm === activeSlide || elm === nextSlide || elm === next2Slide) return;
                            if (perView === 4)
                                if (elm === activeSlide || elm === nextSlide || elm === next2Slide || elm === next3Slide) return;

                            stopVideo(elm);
                        });

                        const slider = activeSlide.closest('.glide');
                        slider.classList.add('running');
                    }

                    let myslider = document.querySelector("#dBuTcLv");
                    let _dBuTcLv;
                    if (myslider.classList.contains('coverflow')) {

                        _dBuTcLv = new Glide(myslider, {
                            type: "carousel",
                            autoplay: false,
                            animationDuration: 1000,
                            gap: 0,
                            perView: 3,
                            startAt: 2,
                            hoverpause: false,
                            arrow: true,
                            dots: false,
                            breakpoints: {
                                575: {
                                    perView: 1,
                                    peek: 50
                                },

                                414: {
                                    perView: 1,
                                    peek: 40
                                },

                                360: {
                                    perView: 1,
                                    peek: 30
                                }
                            },
                            // focusAt: "center",
                        });

                    } else {

                        _dBuTcLv = new Glide("#dBuTcLv", {
                            type: "carousel",
                            autoplay: false,
                            animationDuration: 1000,
                            gap: 0,
                            perView: 3,
                            hoverpause: false,
                            arrow: true,
                            dots: false,
                            breakpoints: {

                                1280: {
                                    perView: 2
                                },
                                970: {
                                    perView: 1,
                                    gap: 0
                                },
                                1280: {
                                    gap: 15
                                }
                            },
                        });

                    }

                    _dBuTcLv.on('mount.after', function() {
                        coverflow(_dBuTcLv.index, true);
                    });

                    _dBuTcLv.on('run', function(event) {
                        coverflow(_dBuTcLv.index);
                    });

                    _dBuTcLv.mount();

                    const ap = 3000;
                    if (ap) {
                        const glideElement = dBuTcLv;
                        let isSliderRunning = false;
                        const manageSliderVisibility = (entries) => {
                            if (entries[0].isIntersecting) {
                                if (!isSliderRunning) {
                                    _dBuTcLv.update({
                                        autoplay: ap
                                    });
                                    isSliderRunning = true;
                                }
                            } else {
                                if (isSliderRunning) {
                                    _dBuTcLv.update({
                                        autoplay: false
                                    });
                                    isSliderRunning = false;
                                }
                            }
                        }
                        const observer = new IntersectionObserver(manageSliderVisibility, {
                            threshold: 0.5
                        });
                        observer.observe(glideElement);
                    }

                });
            