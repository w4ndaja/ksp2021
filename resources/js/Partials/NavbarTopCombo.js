import React from 'react'

export const NavbarTopCombo = () => {
    return (
        <>
            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg" data-move-target="#navbarVerticalNav" data-navbar-top="combo">
                <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line" /></span></button>
                <a className="navbar-brand me-1 me-sm-3" href="../index-2.html">
                    <div className="d-flex align-items-center"><img className="me-2" src="../assets/img/icons/spot-illustrations/falcon.png" width={40} /><span className="font-sans-serif">falcon</span></div>
                </a>
                <div className="collapse navbar-collapse scrollbar" id="navbarStandard">
                    <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Dashboard</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="../index-2.html">Default</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/analytics.html">Analytics</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/crm.html">CRM</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/e-commerce.html">E commerce</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/project-management.html">Management</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/saas.html">SaaS</a></div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps">App</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
                                <div className="card navbar-card-app shadow-none dark__bg-1000">
                                    <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} />
                                        <div className="row">
                                            <div className="col-6 col-md-5">
                                                <div className="nav flex-column"><a className="nav-link py-1 link-600 fw-medium" href="../app/calendar.html">Calendar</a><a className="nav-link py-1 link-600 fw-medium" href="../app/chat.html">Chat</a><a className="nav-link py-1 link-600 fw-medium" href="../app/kanban.html">Kanban</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Email</p><a className="nav-link py-1 link-600 fw-medium" href="../app/email/inbox.html">Inbox</a><a className="nav-link py-1 link-600 fw-medium" href="../app/email/email-detail.html">Email detail</a><a className="nav-link py-1 link-600 fw-medium" href="../app/email/compose.html">Compose</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Events</p><a className="nav-link py-1 link-600 fw-medium" href="../app/events/create-an-event.html">Create an
                                                        event</a><a className="nav-link py-1 link-600 fw-medium" href="../app/events/event-detail.html">Event detail</a><a className="nav-link py-1 link-600 fw-medium" href="../app/events/event-list.html">Event list</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Social</p><a className="nav-link py-1 link-600 fw-medium" href="../app/social/feed.html">Feed</a><a className="nav-link py-1 link-600 fw-medium" href="../app/social/activity-log.html">Activity log</a><a className="nav-link py-1 link-600 fw-medium" href="../app/social/notifications.html">Notifications</a><a className="nav-link py-1 link-600 fw-medium" href="../app/social/followers.html">Followers</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">E-Commerce</p><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/product-list.html">Product
                                                        list</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/product-grid.html">Product
                                                            grid</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/product-details.html">Product
                                                                details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/orders/order-list.html">Order
                                                                    list</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/orders/order-details.html">Order
                                                                        details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/customers.html">Customers</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/customer-details.html">Customer
                                                                            details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/shopping-cart.html">Shopping
                                                                                cart</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/checkout.html">Checkout</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/billing.html">Billing</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/invoice.html">Invoice</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pagess">Pages</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="pagess">
                                <div className="card navbar-card-pages shadow-none dark__bg-1000">
                                    <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} />
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Simple Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/forgot-password.html">Forgot
                                                        password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/confirm-mail.html">Confirm
                                                            mail</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/reset-password.html">Reset
                                                                password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/lock-screen.html">Lock
                                                                    screen</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Card Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/forgot-password.html">Forgot
                                                        password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/confirm-mail.html">Confirm
                                                            mail</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/reset-password.html">Reset
                                                                password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/lock-screen.html">Lock screen</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Split Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/forgot-password.html">Forgot
                                                        password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/confirm-mail.html">Confirm
                                                            mail</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/reset-password.html">Reset
                                                                password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/lock-screen.html">Lock screen</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Other Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="../index.html#authentication-modal" data-bs-toggle="modal">Modal</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Miscellaneous</p><a className="nav-link py-1 link-600 fw-medium" href="miscellaneous/associations.html">Associations</a><a className="nav-link py-1 link-600 fw-medium" href="miscellaneous/invite-people.html">Invite people</a><a className="nav-link py-1 link-600 fw-medium" href="miscellaneous/privacy-policy.html">Privacy policy</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">User</p><a className="nav-link py-1 link-600 fw-medium" href="user/profile.html">Profile</a><a className="nav-link py-1 link-600 fw-medium" href="user/settings.html">Settings</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Pricing</p><a className="nav-link py-1 link-600 fw-medium" href="pricing/pricing-default.html">Pricing default</a><a className="nav-link py-1 link-600 fw-medium" href="pricing/pricing-alt.html">Pricing alt</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Errors</p><a className="nav-link py-1 link-600 fw-medium" href="errors/404.html">404</a><a className="nav-link py-1 link-600 fw-medium" href="errors/500.html">500</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Others</p><a className="nav-link py-1 link-600 fw-medium" href="starter.html">Starter</a><a className="nav-link py-1 link-600 fw-medium" href="landing.html">Landing</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moduless">Modules</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="moduless">
                                <div className="card navbar-card-components shadow-none dark__bg-1000">
                                    <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} />
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Components</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/accordion.html">Accordion</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/alerts.html">Alerts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/anchor.html">Anchor</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/animated-icons.html">Animated
                                                        icons</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/background.html">Background</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/badges.html">Badges</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/breadcrumbs.html">Breadcrumbs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/buttons.html">Buttons</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/calendar.html">Calendar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/cards.html">Cards</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/carousel/bootstrap.html">Bootstrap
                                                            carousel</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-md-4 pt-md-1"><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/carousel/swiper.html">Swiper</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/collapse.html">Collapse</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/cookie-notice.html">Cookie
                                                    notice</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/countup.html">Countup</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/draggable.html">Draggable</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/dropdowns.html">Dropdowns</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/list-group.html">List
                                                        group</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/modals.html">Modals</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/navs.html">Navs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/vertical-navbar.html">Vertical
                                                            navbar</a></div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/top-navbar.html">Top
                                                    navbar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/combo-navbar.html">Combo
                                                        navbar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/avatar.html">Avatar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/images.html">Images</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/figures.html">Figures</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/hoverbox.html">Hoverbox</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/lightbox.html">Lightbox</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/progress-bar/basic.html">Basic
                                                            progress bar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/progress-bar/advance.html">Advance
                                                                progress bar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pagination.html">Pagination</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/popovers.html">Popovers</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/scrollspy.html">Scrollspy</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/search.html">Search</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/sidepanel.html">Sidepanel</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/spinners.html">Spinners</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/toasts.html">Toasts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/tooltips.html">Tooltips</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/typed-text.html">Typed
                                                    text</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/videos/embed.html">Embed</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/videos/plyr.html">Plyr</a></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Forms</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/form-control.html">Form
                                                        control</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/input-group.html">Input
                                                            group</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/select.html">Select</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/checks.html">Checks</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/range.html">Range</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/layout.html">Layout</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/advance-select.html">Advance
                                                                select</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/date-picker.html">Date
                                                                    picker</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/editor.html">Editor</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/emoji-button.html">Emoji
                                                                        button</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/file-uploader.html">File
                                                                            uploader</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/rating.html">Rating</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/floating-labels.html">Floating
                                                                                labels</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/validation.html">Validation</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Tables</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/tables/basic-tables.html">Basic
                                                        tables</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/tables/advance-tables.html">Advance
                                                            tables</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/tables/bulk-select.html">Bulk select</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Charts</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/chartjs.html">Chartjs</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">ECharts</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/line-charts.html">Line
                                                        charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/bar-charts.html">Bar
                                                            charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/candlestick-charts.html">Candlestick
                                                                charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/geo-map.html">Geo map</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/scatter-charts.html">Scatter
                                                                    charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/pie-charts.html">Pie
                                                                        charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/radar-charts.html">Radar
                                                                            charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/heatmap-charts.html">Heatmap
                                                                                charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/how-to-use.html">How to
                                                                                    use</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Utilities</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/borders.html">Borders</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/clearfix.html">Clearfix</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/colors.html">Colors</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/colored-links.html">Colored
                                                        links</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/display.html">Display</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/flex.html">Flex</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/float.html">Float</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/grid.html">Grid</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/overlayscrollbars.html">Overlayscrollbars</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/position.html">Position</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/spacing.html">Spacing</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/sizing.html">Sizing</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/stretched-link.html">Stretched
                                                            link</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/text-truncation.html">Text
                                                                truncation</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/typography.html">Typography</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/vertical-align.html">Vertical
                                                                    align</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/visibility.html">Visibility</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-xxl-4 pt-xxl-1">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Icons</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/font-awesome.html">Font awesome</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/bootstrap-icons.html">Bootstrap
                                                        icons</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/feather.html">Feather</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/material-icons.html">Material
                                                            icons</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Maps</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/maps/google-map.html">Google map</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/maps/leaflet-map.html">Leaflet map</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="documentations">Documentation</a>
                            <div className="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="documentations">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="../documentation/getting-started.html">Getting started</a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/configuration.html">Configuration</a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/styling.html">Styling</a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/dark-mode.html">Dark mode<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/plugin.html">Plugin</a><a className="dropdown-item link-600 fw-medium" href="../documentation/gulp.html">Gulp</a><a className="dropdown-item link-600 fw-medium" href="../documentation/design-file.html">Design file</a><a className="dropdown-item link-600 fw-medium" href="../changelog.html">Changelog</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" defaultValue="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span className="fas fa-sun fs-0" /></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span className="fas fa-moon fs-0" /></label></div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="../app/e-commerce/shopping-cart.html"><span className="fas fa-shopping-cart" data-fa-transform="shrink-7" style={{ fontSize: 33 }} /><span className="notification-indicator-number">1</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-bell" data-fa-transform="shrink-6" style={{ fontSize: 33 }} /></a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification" aria-labelledby="navbarDropdownNotification">
                            <div className="card card-notification shadow-none">
                                <div className="card-header">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-auto">
                                            <h6 className="card-header-title mb-0">Notifications</h6>
                                        </div>
                                        <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                                    </div>
                                </div>
                                <div className="scrollbar-overlay" style={{ maxHeight: '19rem' }}>
                                    <div className="list-group list-group-flush fw-normal fs--1">
                                        <div className="list-group-title border-bottom">NEW</div>
                                        <div className="list-group-item">
                                            <a className="notification notification-flush notification-unread" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-2xl me-3">
                                                        <img className="rounded-circle" src="../assets/img/team/1-thumb.png" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>Emma Watson</strong> replied to your
                                                        comment : "Hello world 😍"</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-item">
                                            <a className="notification notification-flush notification-unread" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-2xl me-3">
                                                        <div className="avatar-name rounded-circle"><span>AB</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>Albert Brooks</strong> reacted to
                                                        <strong>Mia Khalifa's</strong> status
                                                    </p>
                                                    <span className="notification-time"><span className="me-2 fab fa-gratipay text-danger" />9hr</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-title border-bottom">EARLIER</div>
                                        <div className="list-group-item">
                                            <a className="notification notification-flush" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-2xl me-3">
                                                        <img className="rounded-circle" src="../assets/img/icons/weather-sm.jpg" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1">The forecast today shows a low of 20℃ in
                                                        California. See today's weather.</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-item">
                                            <a className="border-bottom-0 notification-unread  notification notification-flush" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-xl me-3">
                                                        <img className="rounded-circle" src="../assets/img/logos/oxford.png" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>University of Oxford</strong> created an
                                                        event : "Causal Inference Hilary 2019"</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-item">
                                            <a className="border-bottom-0 notification notification-flush" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-xl me-3">
                                                        <img className="rounded-circle" src="../assets/img/team/10.jpg" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>James Cameron</strong> invited to join
                                                        the group: United Nations International Children's Fund</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🙋‍</span>2d</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center border-top"><a className="card-link d-block" href="../app/social/notifications.html">View all</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link pe-0" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar avatar-xl">
                            <img className="rounded-circle" src="../assets/img/team/3-thumb.png" />
                        </div>
                    </a>
                        <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                            <div className="bg-white dark__bg-1000 rounded-2 py-2">
                                <a className="dropdown-item fw-bold text-warning" href="#!"><span className="fas fa-crown me-1" /><span>Go Pro</span></a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">Set status</a>
                                <a className="dropdown-item" href="user/profile.html">Profile &amp; account</a>
                                <a className="dropdown-item" href="#!">Feedback</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="user/settings.html">Settings</a>
                                <a className="dropdown-item" href="authentication/card/logout.html">Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}
