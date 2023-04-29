const public_routes = {};

public_routes.dashboard = "/admin-dashboard";

// public_routes.pageNotFound = "/error-404";

// public_routes.serverError = "/error-500";

// ------------------- Authentication / Error ---------------------//

public_routes.register = "/register";

public_routes.login = "/login";

public_routes.lockscreen = "/lock-screen";

public_routes.forgotpassword = "/forgot-password";

public_routes.errorpages = "/error-pages";

public_routes.servererror = "/error-500";

// ------------------- Application ---------------------//

public_routes.chat = "/chat";

public_routes.calendar = "/calendar";

public_routes.email = "/email";

// ------------------- Customers ---------------------//

public_routes.customers = "/customers";

public_routes.customerdetails = "/customer-details";

public_routes.vendors = "/vendors";

public_routes.addcustomer = "/add-customer";

public_routes.editcustomer = "/edit-customer";

public_routes.activecustomers = "/active-customers";

public_routes.deactivecustomers = "/deactive-customers";

public_routes.customerdetailspaid = "/customer-details-paid";

public_routes.customerdetailscancel = "/customer-details-cancel";

public_routes.ledger = "/ledger";

// ------------------- Inventory ---------------------//

public_routes.productlist = "/product-list";

public_routes.category = "/category";

public_routes.units = "/units";

public_routes.addproduct = "/add-product";

public_routes.editproduct = "/edit-product";

public_routes.inventory = "/inventory";

// ------------------- Sales ---------------------//

public_routes.invoices = "/invoices";

public_routes.invoicetemplate = "/invoice-template";

public_routes.recurringinvoices = "/recurring-invoices";

public_routes.creditnotes = "/credit-notes";

public_routes.invoicedetails = "/invoice-details";

public_routes.addinvoice = "/add-invoice";

public_routes.editinvoice = "/edit-invoice";

public_routes.invoicepaid = "/invoice-paid";

public_routes.invoicesoverdue = "/invoices-overdue";

public_routes.invoicesdraft = "/invoices-draft";

public_routes.invoicesrecurring = "/invoices-recurring";

public_routes.invoicescancelled = "/invoices-cancelled";

public_routes.recurringpending = "/recurring-pending";

public_routes.recurringoverdue = "/recurring-overdue";

public_routes.recurringdraft = "/recurring-draft";

public_routes.recurring = "/recurring";

public_routes.recurringpaid = "/recurring-paid";

public_routes.recurringcancelled = "/recurring-cancelled";

public_routes.creditdetails = "/credit-note-details";

public_routes.creditedit = "/edit-note-credit";

public_routes.creditadd = "/add-note-credit";

public_routes.creditpending = "/credit-note-pending";

public_routes.creditoverdue = "/credit-note-overdue";

public_routes.creditdraft = "/credit-note-draft";

public_routes.creditrecurring = "/credit-note-recurring";

public_routes.creditcancelled = "/credit-note-cancelled";

// == Invoices Templates == //

public_routes.generalinvoices1 = "/general-invoices-1";

public_routes.generalinvoices2 = "/general-invoices-2";

public_routes.generalinvoices3 = "/general-invoices-3";

public_routes.generalinvoices4 = "/general-invoices-4";

public_routes.generalinvoices5 = "/general-invoices-5";

public_routes.businvoice = "/bus-ticket-booking-invoice";

public_routes.carinvoice = "/car-booking-invoice";

public_routes.coffeeinvoice = "/coffee-shop-invoice";

public_routes.domaininvoice = "/domainhosting-invoice";

public_routes.ecommerceinvoice = "/ecommerce-invoice";

public_routes.fitnessinvoice = "/fitness-center-invoice";

public_routes.traininvoice = "/train-ticket-booking-invoice";

public_routes.flightinvoice = "/flight-booking-invoice";

public_routes.hotelinvoice = "/hotel-booking-invoice";

public_routes.internetinvoice = "/internet-billing-invoice";

public_routes.medicalinvoice = "/medical-invoice";

public_routes.exchangeinvoice = "/money-exchange-invoice";

public_routes.movieinvoice = "/movie-ticket-booking-invoice";

public_routes.restaurantinvoice = "/restaurant-invoice";

public_routes.studentinvoice = "/student-billing-invoice";

public_routes.cashreceipt1 = "/cash-receipt-1";

public_routes.cashreceipt2 = "/cash-receipt-2";

public_routes.cashreceipt3 = "/cash-receipt-3";

public_routes.cashreceipt4 = "/cash-receipt-4";

// ------------------- Purchases ---------------------//

public_routes.purchases = "/purchases";

public_routes.purchaseorders = "/purchase-orders";

public_routes.debitnotes = "/debit-notes";

public_routes.purchaseadd = "/add-purchase";

public_routes.purchaseedit = "/edit-purchase";

public_routes.purchasedetails = "/purchase-details";

// ------------------- Finance and Accounts ---------------------//

public_routes.expenses = "/expenses";

public_routes.payments = "/payments";

// ------------------- Purchases ---------------------//

public_routes.quotations = "/quotations";

public_routes.addquotation = "/add-quotation";

public_routes.editquotation = "/edit-quotation";

public_routes.deliverychallans = "/delivery-challans";

public_routes.adddelivery = "/add-delivery-challans";

public_routes.editdelivery = "/edit-delivery-challans";

// ------------------- Report ---------------------//

public_routes.quotation = "/quotation";

public_routes.paymentsummary = "/payment-summary";

// ------------------- User Management ---------------------//

public_routes.adduser = "/add-user";

public_routes.users = "/users";

public_routes.edituser = "/edit-user";

public_routes.rolespermission = "/roles-permission";

public_routes.permission = "/permission";

public_routes.deleteaccountrequest = "/delete-account-request";

// ------------------- Membership ---------------------//

public_routes.membershipplans = "/membership-plans";

public_routes.addmembership = "/add-membership";

public_routes.membershipaddons = "/membership-addons";

public_routes.subscribers = "/subscribers";

public_routes.transactions = "/transactions";

// ------------------- Content CMS ---------------------//

public_routes.addblog = "/add-blog";

public_routes.allblogs = "/all-blogs";

public_routes.blogcomments = "/blog-comments";

public_routes.categories = "/categories";

public_routes.cities = "/cities";

public_routes.countries = "/countries";

public_routes.states = "/states";

public_routes.addpage = "/add-page";

public_routes.pages = "/pages";

public_routes.faq = "/faq";

public_routes.testimonials = "/testimonials";

public_routes.addcategories = "/add-categories";

public_routes.addtestimonials = "/add-testimonials";

public_routes.edittestimonials = "/edit-testimonials";

public_routes.inactiveblog = "/inactive-blog";

// ------------------- Support ---------------------//

public_routes.tickets = "/tickets";

public_routes.ticketskanban = "/tickets-kanban";

public_routes.ticketslist = "/tickets-list";

public_routes.ticketoverview = "/ticketoverview";

public_routes.contactmessages = "/contact-messages";

public_routes.contactdetails = "/contact-details";

public_routes.ticketlistpending = "/ticket-list-pending";

public_routes.ticketlistoverdue = "/ticket-list-overdue";

public_routes.ticketlistdraft = "/ticket-list-draft";

public_routes.ticketlistrecurring = "/ticket-list-recurring";

public_routes.ticketlistcancelled = "/ticket-list-cancelled";

public_routes.ticketpending = "/ticket-pending";

public_routes.ticketoverdue = "/ticket-overdue";

public_routes.ticketdraft = "/ticket-draft";

public_routes.ticketrecurring = "/ticket-recurring";

public_routes.ticketcancelled = "/ticket-cancelled";

// ------------------- Pages ---------------------//

public_routes.profile = "/profile";

public_routes.viewestimate = "/view-estimate";

public_routes.blankpage = "/blank-page";

public_routes.vectormaps = "/vector-maps";

// ------------------- Ui - Interface ---------------------//

// -- Base Ui Router-- //

// -- Chart Router-- //

public_routes.chartjs = "/chart-js";

public_routes.apexcharts = "/apex-charts";

public_routes.peitycharts = "/peity-charts";

public_routes.flotcharts = "/flot-charts";

public_routes.c3charts = "/c3-charts";

public_routes.morrischarts = "/morris-charts";

// -- Table Router-- //

public_routes.basictables = "/basic-tables";

public_routes.datatable = "/data-table";

// -- Form Router-- //

public_routes.basicinputs = "/basic-inputs";

public_routes.fileupload = "/file-upload";

public_routes.formmask = "/form-mask";

public_routes.formselect2 = "/form-select2";

public_routes.formvalidation = "/form-validation";

public_routes.horizontalform = "/horizontal-form";

public_routes.inputgroups = "/input-groups";

public_routes.verticalform = "/vertical-form";

// -- Elements Router -- //

public_routes.ribbon = "/ribbon";

public_routes.clipboard = "/clipboard";

public_routes.dragdrop = "/drag-drop";

public_routes.rating = "/rating";

public_routes.texteditor = "/text-editor";

public_routes.counter = "/counter";

public_routes.scrollbar = "/scrollbar";

public_routes.notification = "/notification";

public_routes.stickynote = "/sticky-note";

public_routes.timeline = "/timeline";

public_routes.horizontaltimeline = "/horizontal-timelline";

public_routes.formwizard = "/form-wizard";

// -- Icons Router-- //

public_routes.fontawesomeicons = "/fontAwesome-icons";

public_routes.feathericons = "/feather-icons";

public_routes.ionicicons = "/ionic-icons";

public_routes.materialicons = "/material-icons";

public_routes.pe7icons = "/pe7-icons";

public_routes.simplelineicons = "/simpleline-icons";

public_routes.themifyicons = "/themify-icons";

public_routes.weathericons = "/weather-icons";

public_routes.typiconicons = "/typicon-icons";

public_routes.flagicons = "/flag-icons";

// -- BaseUi Router-- //

public_routes.alerts = "/alerts";

public_routes.accordions = "/accordions";

public_routes.avatar = "/avatar";

public_routes.badges = "/badges";

public_routes.buttons = "/buttons";

public_routes.buttongroup = "/button-group";

public_routes.breadcrumb = "/bread-crumb";

public_routes.cards = "/cards";

public_routes.carousel = "/carousel";

public_routes.dropdowns = "/dropdowns";

public_routes.grid = "/grid";

public_routes.images = "/images";

public_routes.lightbox = "/light-box";

public_routes.media = "/media";

public_routes.modals = "/modals";

public_routes.offcanvas = "/off-canvas";

public_routes.pagination = "/pagination";

public_routes.popover = "/pop-over";

public_routes.progressbar = "/progress-bar";

public_routes.placeholders = "/place-holders";

public_routes.rangeslider = "/range-slider";

public_routes.spinners = "/spinners";

public_routes.sweetalerts = "/sweet-alerts";

public_routes.tabs = "/tabs";

public_routes.toasts = "/toasts";

public_routes.tooltip = "/tooltip";

public_routes.typography = "/typography";

public_routes.video = "/video";

// ------------------- Setting ---------------------//

public_routes.settings = "/settings";

public_routes.preferences = "/preferences";

public_routes.notifications = "/notifications";

public_routes.taxtypes = "/tax-types";

public_routes.expensecategory = "/expense-category";

public_routes.deleteaccount = "/delete-account";

public_routes.changepassword = "/change-password";

module.exports = public_routes;
