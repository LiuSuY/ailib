'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' : 'data-bs-target="#xs-controllers-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' :
                                            'id="xs-controllers-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' : 'data-bs-target="#xs-injectables-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' :
                                        'id="xs-injectables-links-module-AppModule-265fd52a203f98f18670c8d41be5ee064bbbe7938840f569f7fb6563a8214a1b44f935e8fe7831b46aef5d1929e20bfaf9d9cdab5e002939e7762a022c694d11"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-9aaf702d545e6ccebd0fe76f7e9ab855389929f1632a87442f7c462f6c6169aff4dd431a2b84d58c2249939e133eab7bc64157bfdbb55cba4e1601f4b1735724"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-9aaf702d545e6ccebd0fe76f7e9ab855389929f1632a87442f7c462f6c6169aff4dd431a2b84d58c2249939e133eab7bc64157bfdbb55cba4e1601f4b1735724"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9aaf702d545e6ccebd0fe76f7e9ab855389929f1632a87442f7c462f6c6169aff4dd431a2b84d58c2249939e133eab7bc64157bfdbb55cba4e1601f4b1735724"' :
                                        'id="xs-injectables-links-module-AuthModule-9aaf702d545e6ccebd0fe76f7e9ab855389929f1632a87442f7c462f6c6169aff4dd431a2b84d58c2249939e133eab7bc64157bfdbb55cba4e1601f4b1735724"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-320b50f50ca2d814bac78d3eee1c9c016b9926706b5c9022e700e194cb534613e368868e5d89bf1feaf3741f20d391bf0c6ec8bc846202aa9d3bbfc77a274200"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-320b50f50ca2d814bac78d3eee1c9c016b9926706b5c9022e700e194cb534613e368868e5d89bf1feaf3741f20d391bf0c6ec8bc846202aa9d3bbfc77a274200"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-320b50f50ca2d814bac78d3eee1c9c016b9926706b5c9022e700e194cb534613e368868e5d89bf1feaf3741f20d391bf0c6ec8bc846202aa9d3bbfc77a274200"' :
                                        'id="xs-injectables-links-module-UsersModule-320b50f50ca2d814bac78d3eee1c9c016b9926706b5c9022e700e194cb534613e368868e5d89bf1feaf3741f20d391bf0c6ec8bc846202aa9d3bbfc77a274200"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});