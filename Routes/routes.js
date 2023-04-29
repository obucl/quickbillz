const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");

var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./local-storage");

// const selected_layout = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";

var changeLayout = function (res) {
  setLayout();
  res.redirect(public_routes.dashboard);
};

route.use(function (req, res, next) {
  let url_replace_options = req.url.replace("?", "").replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key].replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});

var setLayout = function () {
  let current_layout = localStorage.getItem("layout");
  if (current_layout == "index") {
    selected_layout = "index";
  }
  if (current_layout == "index-one") {
    selected_layout = "index-one";
  }
  if (current_layout == "index-two") {
    selected_layout = "index-two";
  }
  if (current_layout == "index-three") {
    selected_layout = "index-three";
  }
  if (current_layout == "index-four") {
    selected_layout = "index-four";
  }
  if (current_layout == "index-five") {
    selected_layout = "index-five";
  }
};
setLayout();
route.get("/index", function (req, res) {
  localStorage.setItem("layout", "index");
  changeLayout(res);
});

route.get("/index-two", function (req, res) {
  localStorage.setItem("layout", "index-two");
  changeLayout(res);
});

route.get("/index-three", function (req, res) {
  localStorage.setItem("layout", "index-three");
  changeLayout(res);
});

route.get("/index-four", function (req, res) {
  localStorage.setItem("layout", "index-four");
  changeLayout(res);
});

route.get("/index-five", function (req, res) {
  localStorage.setItem("layout", "index-five");
  changeLayout(res);
});

// --------------- " Redirect " ---------------- //

route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});

{
  /* <Redirect> */
}
// --------------- Authentications ---------------- //

route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Login",
    page_path: "authentication/login",
    layout: index_without_nav,
  });
});
route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Register",
    page_path: "authentication/register",
    layout: index_without_nav,
  });
});
route.get(public_routes.forgotpassword, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Forgot Password",
    page_path: "authentication/forgotpassword",
    layout: index_without_nav,
  });
});
route.get(public_routes.lockscreen, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Lock Screen",
    page_path: "authentication/lockscreen",
    layout: index_without_nav,
  });
});
route.get(public_routes.errorpages, (req, res, next) => {
  res.render(index_error, {
    title: "Error-404 Pages",
    page_path: "error/errorpages",
    layout: index_error,
  });
});
route.get(public_routes.servererror, (req, res, next) => {
  res.render(index_error, {
    title: "Error-500 Pages",
    page_path: "error/servererror",
    layout: index_error,
  });
});

// route.get(public_routes.pageNotFound, (req, res, next) => {
//   res.render(index_error, {
//     title: "Error 404",
//     page_path: "errorpages/error404",
//     layout: index_error,
//   });
// });

// route.get(public_routes.serverError, (req, res, next) => {
//   res.render(index_error, {
//     title: "Error 500",
//     page_path: "errorpages/error500",
//     layout: index_error,
//   });
// });

route.get(public_routes.dashboard, (req, res, next) => {
  res.render(selected_layout, {
    title: "Dashboard",
    page_path: "dashboard/admindashboard",
    layout: selected_layout,
  });
});

// --------------- /Authentications ---------------- //

// --------------- Applications ---------------- //
route.get(public_routes.chat, (req, res, next) => {
  res.render(selected_layout, {
    title: "Chat",
    page_path: "applications/chat",
    layout: selected_layout,
  });
});
route.get(public_routes.calendar, (req, res, next) => {
  res.render(selected_layout, {
    title: "Calendar",
    page_path: "applications/calendar",
    layout: selected_layout,
  });
});
route.get(public_routes.email, (req, res, next) => {
  res.render(selected_layout, {
    title: "Email",
    page_path: "applications/email",
    layout: selected_layout,
  });
});
// --------------- /Applications ---------------- //
// --------------- Customers ---------------- //
route.get(public_routes.customers, (req, res, next) => {
  res.render(selected_layout, {
    title: "Customers",
    page_path: "customers/customers",
    layout: selected_layout,
  });
});
route.get(public_routes.customerdetails, (req, res, next) => {
  res.render(selected_layout, {
    title: "Customer Details",
    page_path: "customers/customerdetails",
    layout: selected_layout,
  });
});
route.get(public_routes.vendors, (req, res, next) => {
  res.render(selected_layout, {
    title: "Vendors",
    page_path: "customers/vendors",
    layout: selected_layout,
  });
});
route.get(public_routes.addcustomer, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Customer",
    page_path: "customers/addcustomer",
    layout: selected_layout,
  });
});
route.get(public_routes.editcustomer, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit Customer",
    page_path: "customers/editcustomer",
    layout: selected_layout,
  });
});
route.get(public_routes.customerdetailspaid, (req, res, next) => {
  res.render(selected_layout, {
    title: "Customer Details Paid",
    page_path: "customers/customerdetailspaid",
    layout: selected_layout,
  });
});
route.get(public_routes.customerdetailscancel, (req, res, next) => {
  res.render(selected_layout, {
    title: "Customer Details Cancel",
    page_path: "customers/customerdetailscancel",
    layout: selected_layout,
  });
});
route.get(public_routes.activecustomers, (req, res, next) => {
  res.render(selected_layout, {
    title: "Active Customers",
    page_path: "customers/activecustomers",
    layout: selected_layout,
  });
});
route.get(public_routes.deactivecustomers, (req, res, next) => {
  res.render(selected_layout, {
    title: "Deactive Customers",
    page_path: "customers/deactivecustomers",
    layout: selected_layout,
  });
});
route.get(public_routes.ledger, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ledger",
    page_path: "customers/ledger",
    layout: selected_layout,
  });
});
// --------------- /Customers ---------------- //
// --------------- Inventory ---------------- //
route.get(public_routes.productlist, (req, res, next) => {
  res.render(selected_layout, {
    title: "Product List",
    page_path: "inventory/productsServices/productlist",
    layout: selected_layout,
  });
});
route.get(public_routes.category, (req, res, next) => {
  res.render(selected_layout, {
    title: "Category",
    page_path: "inventory/productsServices/category",
    layout: selected_layout,
  });
});
route.get(public_routes.units, (req, res, next) => {
  res.render(selected_layout, {
    title: "Units",
    page_path: "inventory/productsServices/units",
    layout: selected_layout,
  });
});
route.get(public_routes.addproduct, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Product",
    page_path: "inventory/productsServices/addproduct",
    layout: selected_layout,
  });
});
route.get(public_routes.editproduct, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit Product",
    page_path: "inventory/productsServices/editproduct",
    layout: selected_layout,
  });
});
route.get(public_routes.inventory, (req, res, next) => {
  res.render(selected_layout, {
    title: "Inventory",
    page_path: "inventory/inventory",
    layout: selected_layout,
  });
});
// --------------- /Inventory ---------------- //
// --------------- Sales ---------------- //
route.get(public_routes.recurringinvoices, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring Invoices",
    page_path: "sales/recurringinvoices",
    layout: selected_layout,
  });
});
route.get(public_routes.creditnotes, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Noted",
    page_path: "sales/creditnotes",
    layout: selected_layout,
  });
});
route.get(public_routes.invoices, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoices",
    page_path: "sales/invoices/invoices",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicetemplate, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoice Template",
    page_path: "sales/invoices/invoicetemplate",
    layout: selected_layout,
  });
});
route.get(public_routes.addinvoice, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Invoice",
    page_path: "sales/invoices/addinvoice",
    layout: selected_layout,
  });
});
route.get(public_routes.editinvoice, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit Invoice",
    page_path: "sales/invoices/editinvoice",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicedetails, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoice Details",
    page_path: "sales/invoices/invoicedetails",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicepaid, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoice Paid",
    page_path: "sales/invoices/invoicepaid",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicesoverdue, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoices Overdue",
    page_path: "sales/invoices/invoicesoverdue",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicesdraft, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoices Draft",
    page_path: "sales/invoices/invoicesdraft",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicesrecurring, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoices Recurring",
    page_path: "sales/invoices/invoicesrecurring",
    layout: selected_layout,
  });
});
route.get(public_routes.invoicescancelled, (req, res, next) => {
  res.render(selected_layout, {
    title: "Invoices Cancelled",
    page_path: "sales/invoices/invoicescancelled",
    layout: selected_layout,
  });
});
// ==========  Invoices Templates =========//
route.get(public_routes.generalinvoices1, (req, res, next) => {
  res.render(index_without_nav, {
    title: "General Invoices 1 ",
    page_path: "sales/invoices/invoicestemplates/generalinvoice-1",
    layout: index_without_nav,
  });
});
route.get(public_routes.generalinvoices2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "General Invoices 2 ",
    page_path: "sales/invoices/invoicestemplates/generalinvoice-2",
    layout: index_without_nav,
  });
});
route.get(public_routes.generalinvoices3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "General Invoices 3 ",
    page_path: "sales/invoices/invoicestemplates/generalinvoice-3",
    layout: index_without_nav,
  });
});
route.get(public_routes.generalinvoices4, (req, res, next) => {
  res.render(index_without_nav, {
    title: "General Invoices 4",
    page_path: "sales/invoices/invoicestemplates/generalinvoice-4",
    layout: index_without_nav,
  });
});
route.get(public_routes.generalinvoices5, (req, res, next) => {
  res.render(index_without_nav, {
    title: "General Invoices 5",
    page_path: "sales/invoices/invoicestemplates/generalinvoice-5",
    layout: index_without_nav,
  });
});
route.get(public_routes.businvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Bus Ticket Booking Invoice",
    page_path: "sales/invoices/invoicestemplates/businvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.carinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Car Booking Invoice",
    page_path: "sales/invoices/invoicestemplates/carinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.coffeeinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Coffee Shop Invoice",
    page_path: "sales/invoices/invoicestemplates/coffeeinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.domaininvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Domain & Hosting Invoice",
    page_path: "sales/invoices/invoicestemplates/domaininvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.ecommerceinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Ecommerce Invoice",
    page_path: "sales/invoices/invoicestemplates/ecommerceinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.fitnessinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Fitness Center Invoice",
    page_path: "sales/invoices/invoicestemplates/fitnessinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.traininvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Train Ticket Booking Invoice",
    page_path: "sales/invoices/invoicestemplates/traininvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.flightinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Flight Booking Invoice",
    page_path: "sales/invoices/invoicestemplates/flightinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.hotelinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Hotel Booking Invoice",
    page_path: "sales/invoices/invoicestemplates/hotelinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.internetinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Internet Billing Invoice",
    page_path: "sales/invoices/invoicestemplates/internetinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.medicalinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Medical Invoice",
    page_path: "sales/invoices/invoicestemplates/medicalinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.exchangeinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Money Exchange Invoice",
    page_path: "sales/invoices/invoicestemplates/exchangeinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.movieinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Movie Ticket Booking Invoice",
    page_path: "sales/invoices/invoicestemplates/movieinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.restaurantinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Restaurant Invoice",
    page_path: "sales/invoices/invoicestemplates/restaurantinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.studentinvoice, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Student Billing Invoice",
    page_path: "sales/invoices/invoicestemplates/studentinvoice",
    layout: index_without_nav,
  });
});
route.get(public_routes.cashreceipt1, (req, res, next) => {
  res.render(index_without_nav, {
    title: "cash Receipt 1 ",
    page_path: "sales/invoices/invoicestemplates/cashreceipt-1",
    layout: index_without_nav,
  });
});
route.get(public_routes.cashreceipt2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "cash Receipt 2 ",
    page_path: "sales/invoices/invoicestemplates/cashreceipt-2",
    layout: index_without_nav,
  });
});
route.get(public_routes.cashreceipt3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "cash Receipt 3 ",
    page_path: "sales/invoices/invoicestemplates/cashreceipt-3",
    layout: index_without_nav,
  });
});
route.get(public_routes.cashreceipt4, (req, res, next) => {
  res.render(index_without_nav, {
    title: "cash Receipt 4 ",
    page_path: "sales/invoices/invoicestemplates/cashreceipt-4",
    layout: index_without_nav,
  });
});

route.get(public_routes.recurring, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring",
    page_path: "sales/recurring",
    layout: selected_layout,
  });
});
route.get(public_routes.recurringpaid, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring Paid",
    page_path: "sales/recurringpaid",
    layout: selected_layout,
  });
});
route.get(public_routes.recurringpending, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring Pending",
    page_path: "sales/recurringpending",
    layout: selected_layout,
  });
});
route.get(public_routes.recurringoverdue, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring Overdue",
    page_path: "sales/recurringoverdue",
    layout: selected_layout,
  });
});
route.get(public_routes.recurringdraft, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring Draft",
    page_path: "sales/recurringdraft",
    layout: selected_layout,
  });
});
route.get(public_routes.recurringcancelled, (req, res, next) => {
  res.render(selected_layout, {
    title: "Recurring Cancelled",
    page_path: "sales/recurringcancelled",
    layout: selected_layout,
  });
});
route.get(public_routes.creditdetails, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Details",
    page_path: "sales/creditdetails",
    layout: selected_layout,
  });
});
route.get(public_routes.creditedit, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Edit",
    page_path: "sales/creditedit",
    layout: selected_layout,
  });
});
route.get(public_routes.creditadd, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Add",
    page_path: "sales/creditadd",
    layout: selected_layout,
  });
});
route.get(public_routes.creditpending, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Pending",
    page_path: "sales/creditpending",
    layout: selected_layout,
  });
});
route.get(public_routes.creditoverdue, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Overdue",
    page_path: "sales/creditoverdue",
    layout: selected_layout,
  });
});
route.get(public_routes.creditdraft, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Draft",
    page_path: "sales/creditdraft",
    layout: selected_layout,
  });
});
route.get(public_routes.creditrecurring, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Recurring",
    page_path: "sales/creditrecurring",
    layout: selected_layout,
  });
});
route.get(public_routes.creditcancelled, (req, res, next) => {
  res.render(selected_layout, {
    title: "Credit Cancelled",
    page_path: "sales/creditcancelled",
    layout: selected_layout,
  });
});
// --------------- /Sales ---------------- //
// --------------- Purchases ---------------- //
route.get(public_routes.purchases, (req, res, next) => {
  res.render(selected_layout, {
    title: "Purchases",
    page_path: "purchases/purchases",
    layout: selected_layout,
  });
});
route.get(public_routes.purchaseorders, (req, res, next) => {
  res.render(selected_layout, {
    title: "Purchase Order",
    page_path: "purchases/purchaseorders",
    layout: selected_layout,
  });
});
route.get(public_routes.debitnotes, (req, res, next) => {
  res.render(selected_layout, {
    title: "Debit Notes",
    page_path: "purchases/debitnotes",
    layout: selected_layout,
  });
});
route.get(public_routes.purchasedetails, (req, res, next) => {
  res.render(selected_layout, {
    title: "Purchase Details",
    page_path: "purchases/purchasedetails",
    layout: selected_layout,
  });
});
route.get(public_routes.purchaseedit, (req, res, next) => {
  res.render(selected_layout, {
    title: "Purchase Edit",
    page_path: "purchases/purchaseedit",
    layout: selected_layout,
  });
});
route.get(public_routes.purchaseadd, (req, res, next) => {
  res.render(selected_layout, {
    title: "Purchase Add",
    page_path: "purchases/purchaseadd",
    layout: selected_layout,
  });
});
// --------------- /Purchases ---------------- //
// --------------- Finances and Accounts ---------------- //
route.get(public_routes.expenses, (req, res, next) => {
  res.render(selected_layout, {
    title: "Expenses",
    page_path: "financeaccounts/expenses",
    layout: selected_layout,
  });
});
route.get(public_routes.payments, (req, res, next) => {
  res.render(selected_layout, {
    title: "Payments",
    page_path: "financeaccounts/payments",
    layout: selected_layout,
  });
});
// --------------- /Finances and Accounts ---------------- //
// --------------- Quotations ---------------- //
route.get(public_routes.quotations, (req, res, next) => {
  res.render(selected_layout, {
    title: "Quotations",
    page_path: "quotations/quotations",
    layout: selected_layout,
  });
});
route.get(public_routes.deliverychallans, (req, res, next) => {
  res.render(selected_layout, {
    title: "Delivery Challans",
    page_path: "quotations/deliverychallans",
    layout: selected_layout,
  });
});
route.get(public_routes.addquotation, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Quotation",
    page_path: "quotations/addquotation",
    layout: selected_layout,
  });
});
route.get(public_routes.editquotation, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit Quotation",
    page_path: "quotations/editquotation",
    layout: selected_layout,
  });
});
route.get(public_routes.adddelivery, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Delivery Challans",
    page_path: "quotations/adddelivery",
    layout: selected_layout,
  });
});
route.get(public_routes.editdelivery, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit Delivery Challans",
    page_path: "quotations/editdelivery",
    layout: selected_layout,
  });
});
// --------------- /Quotations ---------------- //
// --------------- Reports ---------------- //

route.get(public_routes.paymentsummary, (req, res, next) => {
  res.render(selected_layout, {
    title: "Payment Summary",
    page_path: "quotations/paymentsummary",
    layout: selected_layout,
  });
});
// --------------- /Reports ---------------- //
// --------------- User Management ---------------- //
route.get(public_routes.adduser, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add User",
    page_path: "usermanagement/manageusers/adduser",
    layout: selected_layout,
  });
});
route.get(public_routes.users, (req, res, next) => {
  res.render(selected_layout, {
    title: "Users",
    page_path: "usermanagement/manageusers/users",
    layout: selected_layout,
  });
});
route.get(public_routes.edituser, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit User",
    page_path: "usermanagement/manageusers/edituser",
    layout: selected_layout,
  });
});
route.get(public_routes.rolespermission, (req, res, next) => {
  res.render(selected_layout, {
    title: "Roles Permission",
    page_path: "usermanagement/rolespermission",
    layout: selected_layout,
  });
});
route.get(public_routes.permission, (req, res, next) => {
  res.render(selected_layout, {
    title: "Permission",
    page_path: "usermanagement/permission",
    layout: selected_layout,
  });
});
route.get(public_routes.deleteaccountrequest, (req, res, next) => {
  res.render(selected_layout, {
    title: "Delete Account Request",
    page_path: "usermanagement/deleteaccountrequest",
    layout: selected_layout,
  });
});
// --------------- /User Management ---------------- //
// --------------- Membership ---------------- //
route.get(public_routes.membershipplans, (req, res, next) => {
  res.render(selected_layout, {
    title: "Membership Plans",
    page_path: "membership/membershipplans",
    layout: selected_layout,
  });
});
route.get(public_routes.membershipaddons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Membership Addons",
    page_path: "membership/membershipaddons",
    layout: selected_layout,
  });
});
route.get(public_routes.subscribers, (req, res, next) => {
  res.render(selected_layout, {
    title: "Subscribers",
    page_path: "membership/subscribers",
    layout: selected_layout,
  });
});
route.get(public_routes.transactions, (req, res, next) => {
  res.render(selected_layout, {
    title: "Transactions",
    page_path: "membership/transactions",
    layout: selected_layout,
  });
});
route.get(public_routes.addmembership, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Membership",
    page_path: "membership/addmembership",
    layout: selected_layout,
  });
});
// --------------- /Membership ---------------- //
// --------------- Content CMS ---------------- //

route.get(public_routes.addblog, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Blog",
    page_path: "content/blog/addblog",
    layout: selected_layout,
  });
});
route.get(public_routes.allblogs, (req, res, next) => {
  res.render(selected_layout, {
    title: "All Blog",
    page_path: "content/blog/allblogs",
    layout: selected_layout,
  });
});
route.get(public_routes.blogcomments, (req, res, next) => {
  res.render(selected_layout, {
    title: "Blog Comments",
    page_path: "content/blog/blogcomments",
    layout: selected_layout,
  });
});
route.get(public_routes.categories, (req, res, next) => {
  res.render(selected_layout, {
    title: "Categories",
    page_path: "content/blog/categories",
    layout: selected_layout,
  });
});
route.get(public_routes.cities, (req, res, next) => {
  res.render(selected_layout, {
    title: "Cities",
    page_path: "content/location/cities",
    layout: selected_layout,
  });
});
route.get(public_routes.countries, (req, res, next) => {
  res.render(selected_layout, {
    title: "Countries",
    page_path: "content/location/countries",
    layout: selected_layout,
  });
});
route.get(public_routes.states, (req, res, next) => {
  res.render(selected_layout, {
    title: "States",
    page_path: "content/location/states",
    layout: selected_layout,
  });
});
route.get(public_routes.addpage, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Page",
    page_path: "content/pages/addpage",
    layout: selected_layout,
  });
});
route.get(public_routes.pages, (req, res, next) => {
  res.render(selected_layout, {
    title: "Pages",
    page_path: "content/pages/pages",
    layout: selected_layout,
  });
});
route.get(public_routes.faq, (req, res, next) => {
  res.render(selected_layout, {
    title: "FAQ",
    page_path: "content/faq",
    layout: selected_layout,
  });
});
route.get(public_routes.testimonials, (req, res, next) => {
  res.render(selected_layout, {
    title: "Testimonials",
    page_path: "content/testimonials",
    layout: selected_layout,
  });
});
route.get(public_routes.addcategories, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Categories",
    page_path: "content/blog/addcategories",
    layout: selected_layout,
  });
});
route.get(public_routes.addtestimonials, (req, res, next) => {
  res.render(selected_layout, {
    title: "Add Testimonials",
    page_path: "content/addtestimonials",
    layout: selected_layout,
  });
});
route.get(public_routes.edittestimonials, (req, res, next) => {
  res.render(selected_layout, {
    title: "Edit Testimonials",
    page_path: "content/edittestimonials",
    layout: selected_layout,
  });
});
route.get(public_routes.inactiveblog, (req, res, next) => {
  res.render(selected_layout, {
    title: "Inactive Blog",
    page_path: "content/blog/inactiveblog",
    layout: selected_layout,
  });
});

// --------------- /Content CMS ---------------- //
// --------------- Support ---------------- //

route.get(public_routes.contactmessages, (req, res, next) => {
  res.render(selected_layout, {
    title: "Contact Messages",
    page_path: "support/contactmessages",
    layout: selected_layout,
  });
});

route.get(public_routes.tickets, (req, res, next) => {
  res.render(selected_layout, {
    title: "Tickets",
    page_path: "support/tickets/tickets",
    layout: selected_layout,
  });
});
route.get(public_routes.ticketslist, (req, res, next) => {
  res.render(selected_layout, {
    title: "Tickets List",
    page_path: "support/tickets/ticketslist",
    layout: selected_layout,
  });
});
route.get(public_routes.ticketoverview, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket Overview",
    page_path: "support/tickets/ticketoverview",
    layout: selected_layout,
  });
});
route.get(public_routes.ticketskanban, (req, res, next) => {
  res.render(selected_layout, {
    title: "Tickets Kanban",
    page_path: "support/tickets/ticketskanban",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketlistpending, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket List Pending",
    page_path: "support/tickets/ticketlistpending",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketlistoverdue, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket List Overdue",
    page_path: "support/tickets/ticketlistoverdue",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketlistdraft, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket List Draft",
    page_path: "support/tickets/ticketlistdraft",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketlistrecurring, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket List Recurring",
    page_path: "support/tickets/ticketlistrecurring",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketlistcancelled, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket List Cancelled",
    page_path: "support/tickets/ticketlistcancelled",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketpending, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket Pending",
    page_path: "support/tickets/ticketpending",
    layout: selected_layout,
  });
});

route.get(public_routes.ticketoverdue, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket Overdue",
    page_path: "support/tickets/ticketoverdue",
    layout: selected_layout,
  });
});
route.get(public_routes.ticketdraft, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket Draft",
    page_path: "support/tickets/ticketdraft",
    layout: selected_layout,
  });
});
route.get(public_routes.ticketrecurring, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket Recurring",
    page_path: "support/tickets/ticketrecurring",
    layout: selected_layout,
  });
});
route.get(public_routes.ticketcancelled, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ticket Cancelled",
    page_path: "support/tickets/ticketcancelled",
    layout: selected_layout,
  });
});
// --------------- /Support ---------------- //
// --------------- Pages ---------------- //
route.get(public_routes.profile, (req, res, next) => {
  res.render(selected_layout, {
    title: "Profile",
    page_path: "pages/profile",
    layout: selected_layout,
  });
});
route.get(public_routes.viewestimate, (req, res, next) => {
  res.render(selected_layout, {
    title: "View Estimate",
    page_path: "pages/viewestimate",
    layout: selected_layout,
  });
});
route.get(public_routes.blankpage, (req, res, next) => {
  res.render(selected_layout, {
    title: "Blank Page",
    page_path: "pages/blankpage",
    layout: selected_layout,
  });
});
route.get(public_routes.vectormaps, (req, res, next) => {
  res.render(selected_layout, {
    title: "vectormaps",
    page_path: "pages/vectormaps",
    layout: selected_layout,
  });
});

// --------------- /Pages ---------------- //
// --------------- Ui-Interface ---------------- //

route.get(public_routes.basictables, (req, res, next) => {
  res.render(selected_layout, {
    title: "Basic Tables",
    page_path: "ui-interface/table/basictables",
    layout: selected_layout,
  });
});
route.get(public_routes.datatable, (req, res, next) => {
  res.render(selected_layout, {
    title: "Data Table",
    page_path: "ui-interface/table/datatable",
    layout: selected_layout,
  });
});

route.get(public_routes.chartjs, (req, res, next) => {
  res.render(selected_layout, {
    title: "Chart JS",
    page_path: "ui-interface/charts/chartjs",
    layout: selected_layout,
  });
});
route.get(public_routes.apexcharts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Apex Charts",
    page_path: "ui-interface/charts/apexcharts",
    layout: selected_layout,
  });
});
route.get(public_routes.peitycharts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Peity Charts",
    page_path: "ui-interface/charts/peitycharts",
    layout: selected_layout,
  });
});
route.get(public_routes.flotcharts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Flot Charts",
    page_path: "ui-interface/charts/flotcharts",
    layout: selected_layout,
  });
});
route.get(public_routes.c3charts, (req, res, next) => {
  res.render(selected_layout, {
    title: "C3 Charts",
    page_path: "ui-interface/charts/c3charts",
    layout: selected_layout,
  });
});
route.get(public_routes.morrischarts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Morris Charts",
    page_path: "ui-interface/charts/morrischarts",
    layout: selected_layout,
  });
});

route.get(public_routes.basicinputs, (req, res, next) => {
  res.render(selected_layout, {
    title: "Basic Inputs",
    page_path: "ui-interface/forms/basicinputs",
    layout: selected_layout,
  });
});
route.get(public_routes.fileupload, (req, res, next) => {
  res.render(selected_layout, {
    title: "File Upload",
    page_path: "ui-interface/forms/fileupload",
    layout: selected_layout,
  });
});
route.get(public_routes.formmask, (req, res, next) => {
  res.render(selected_layout, {
    title: "Form Mask",
    page_path: "ui-interface/forms/formmask",
    layout: selected_layout,
  });
});
route.get(public_routes.formselect2, (req, res, next) => {
  res.render(selected_layout, {
    title: "Form Select2",
    page_path: "ui-interface/forms/formselect2",
    layout: selected_layout,
  });
});
route.get(public_routes.formvalidation, (req, res, next) => {
  res.render(selected_layout, {
    title: "Form Validation",
    page_path: "ui-interface/forms/formvalidation",
    layout: selected_layout,
  });
});
route.get(public_routes.horizontalform, (req, res, next) => {
  res.render(selected_layout, {
    title: "Horizontal Form",
    page_path: "ui-interface/forms/horizontalform",
    layout: selected_layout,
  });
});
route.get(public_routes.inputgroups, (req, res, next) => {
  res.render(selected_layout, {
    title: "Input Groups",
    page_path: "ui-interface/forms/inputgroups",
    layout: selected_layout,
  });
});
route.get(public_routes.verticalform, (req, res, next) => {
  res.render(selected_layout, {
    title: "Vertical Form",
    page_path: "ui-interface/forms/verticalform",
    layout: selected_layout,
  });
});
route.get(public_routes.ribbon, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ribbon",
    page_path: "ui-interface/elements/ribbon",
    layout: selected_layout,
  });
});
route.get(public_routes.clipboard, (req, res, next) => {
  res.render(selected_layout, {
    title: "Clipboard",
    page_path: "ui-interface/elements/clipboard",
    layout: selected_layout,
  });
});
route.get(public_routes.dragdrop, (req, res, next) => {
  res.render(selected_layout, {
    title: "Dragdrop",
    page_path: "ui-interface/elements/dragdrop",
    layout: selected_layout,
  });
});
route.get(public_routes.rating, (req, res, next) => {
  res.render(selected_layout, {
    title: "Rating",
    page_path: "ui-interface/elements/rating",
    layout: selected_layout,
  });
});
route.get(public_routes.texteditor, (req, res, next) => {
  res.render(selected_layout, {
    title: "Texteditor",
    page_path: "ui-interface/elements/texteditor",
    layout: selected_layout,
  });
});
route.get(public_routes.counter, (req, res, next) => {
  res.render(selected_layout, {
    title: "Counter",
    page_path: "ui-interface/elements/counter",
    layout: selected_layout,
  });
});
route.get(public_routes.scrollbar, (req, res, next) => {
  res.render(selected_layout, {
    title: "Scrollbar",
    page_path: "ui-interface/elements/scrollbar",
    layout: selected_layout,
  });
});
route.get(public_routes.notification, (req, res, next) => {
  res.render(selected_layout, {
    title: "Notification",
    page_path: "ui-interface/elements/notification",
    layout: selected_layout,
  });
});
route.get(public_routes.stickynote, (req, res, next) => {
  res.render(selected_layout, {
    title: "Sticky Note",
    page_path: "ui-interface/elements/stickynote",
    layout: selected_layout,
  });
});
route.get(public_routes.timeline, (req, res, next) => {
  res.render(selected_layout, {
    title: "Timeline",
    page_path: "ui-interface/elements/timeline",
    layout: selected_layout,
  });
});
route.get(public_routes.horizontaltimeline, (req, res, next) => {
  res.render(selected_layout, {
    title: "Horizontal Timeline",
    page_path: "ui-interface/elements/horizontaltimeline",
    layout: selected_layout,
  });
});
route.get(public_routes.formwizard, (req, res, next) => {
  res.render(selected_layout, {
    title: "Form Wizard",
    page_path: "ui-interface/elements/formwizard",
    layout: selected_layout,
  });
});
route.get(public_routes.fontawesomeicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Font Awesome Icons",
    page_path: "ui-interface/icons/fontawesomeicons",
    layout: selected_layout,
  });
});
route.get(public_routes.feathericons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Feather Icons",
    page_path: "ui-interface/icons/feathericons",
    layout: selected_layout,
  });
});
route.get(public_routes.ionicicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Ionic Icons",
    page_path: "ui-interface/icons/ionicicons",
    layout: selected_layout,
  });
});
route.get(public_routes.materialicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Material Icons",
    page_path: "ui-interface/icons/materialicons",
    layout: selected_layout,
  });
});
route.get(public_routes.pe7icons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Pe7 Icons",
    page_path: "ui-interface/icons/pe7icons",
    layout: selected_layout,
  });
});
route.get(public_routes.simplelineicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Simpleline Icons",
    page_path: "ui-interface/icons/simplelineicons",
    layout: selected_layout,
  });
});
route.get(public_routes.themifyicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Themify Icons",
    page_path: "ui-interface/icons/themifyicons",
    layout: selected_layout,
  });
});
route.get(public_routes.weathericons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Weather Icons",
    page_path: "ui-interface/icons/weathericons",
    layout: selected_layout,
  });
});
route.get(public_routes.typiconicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Typicon Icons",
    page_path: "ui-interface/icons/typiconicons",
    layout: selected_layout,
  });
});
route.get(public_routes.flagicons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Flag Icons",
    page_path: "ui-interface/icons/flagicons",
    layout: selected_layout,
  });
});
route.get(public_routes.alerts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Alerts",
    page_path: "ui-interface/baseui/alerts",
    layout: selected_layout,
  });
});
route.get(public_routes.accordions, (req, res, next) => {
  res.render(selected_layout, {
    title: "Accordions",
    page_path: "ui-interface/baseui/accordions",
    layout: selected_layout,
  });
});
route.get(public_routes.avatar, (req, res, next) => {
  res.render(selected_layout, {
    title: "Avatar",
    page_path: "ui-interface/baseui/avatar",
    layout: selected_layout,
  });
});
route.get(public_routes.badges, (req, res, next) => {
  res.render(selected_layout, {
    title: "Badges",
    page_path: "ui-interface/baseui/badges",
    layout: selected_layout,
  });
});
route.get(public_routes.buttons, (req, res, next) => {
  res.render(selected_layout, {
    title: "Buttons",
    page_path: "ui-interface/baseui/buttons",
    layout: selected_layout,
  });
});
route.get(public_routes.buttongroup, (req, res, next) => {
  res.render(selected_layout, {
    title: "Buttongroup",
    page_path: "ui-interface/baseui/buttongroup",
    layout: selected_layout,
  });
});
route.get(public_routes.breadcrumb, (req, res, next) => {
  res.render(selected_layout, {
    title: "Breadcrumb",
    page_path: "ui-interface/baseui/breadcrumb",
    layout: selected_layout,
  });
});
route.get(public_routes.cards, (req, res, next) => {
  res.render(selected_layout, {
    title: "Cards",
    page_path: "ui-interface/baseui/cards",
    layout: selected_layout,
  });
});
route.get(public_routes.carousel, (req, res, next) => {
  res.render(selected_layout, {
    title: "Carousel",
    page_path: "ui-interface/baseui/carousel",
    layout: selected_layout,
  });
});
route.get(public_routes.dropdowns, (req, res, next) => {
  res.render(selected_layout, {
    title: "Dropdowns",
    page_path: "ui-interface/baseui/dropdowns",
    layout: selected_layout,
  });
});
route.get(public_routes.grid, (req, res, next) => {
  res.render(selected_layout, {
    title: "Grid",
    page_path: "ui-interface/baseui/grid",
    layout: selected_layout,
  });
});
route.get(public_routes.images, (req, res, next) => {
  res.render(selected_layout, {
    title: "Images",
    page_path: "ui-interface/baseui/images",
    layout: selected_layout,
  });
});
route.get(public_routes.lightbox, (req, res, next) => {
  res.render(selected_layout, {
    title: "Light Box",
    page_path: "ui-interface/baseui/lightbox",
    layout: selected_layout,
  });
});
route.get(public_routes.media, (req, res, next) => {
  res.render(selected_layout, {
    title: "Media",
    page_path: "ui-interface/baseui/media",
    layout: selected_layout,
  });
});
route.get(public_routes.modals, (req, res, next) => {
  res.render(selected_layout, {
    title: "Modals",
    page_path: "ui-interface/baseui/modals",
    layout: selected_layout,
  });
});
route.get(public_routes.offcanvas, (req, res, next) => {
  res.render(selected_layout, {
    title: "Off Canvas",
    page_path: "ui-interface/baseui/offcanvas",
    layout: selected_layout,
  });
});
route.get(public_routes.pagination, (req, res, next) => {
  res.render(selected_layout, {
    title: "Pagination",
    page_path: "ui-interface/baseui/pagination",
    layout: selected_layout,
  });
});
route.get(public_routes.popover, (req, res, next) => {
  res.render(selected_layout, {
    title: "Pop Over",
    page_path: "ui-interface/baseui/popover",
    layout: selected_layout,
  });
});
route.get(public_routes.progressbar, (req, res, next) => {
  res.render(selected_layout, {
    title: "Progress Bar",
    page_path: "ui-interface/baseui/progressbar",
    layout: selected_layout,
  });
});
route.get(public_routes.placeholders, (req, res, next) => {
  res.render(selected_layout, {
    title: "Placeholders",
    page_path: "ui-interface/baseui/placeholder",
    layout: selected_layout,
  });
});
route.get(public_routes.rangeslider, (req, res, next) => {
  res.render(selected_layout, {
    title: "Range Slider",
    page_path: "ui-interface/baseui/rangeslider",
    layout: selected_layout,
  });
});
route.get(public_routes.spinners, (req, res, next) => {
  res.render(selected_layout, {
    title: "Spinners",
    page_path: "ui-interface/baseui/spinners",
    layout: selected_layout,
  });
});
route.get(public_routes.sweetalerts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Sweet Alerts",
    page_path: "ui-interface/baseui/sweetalerts",
    layout: selected_layout,
  });
});
route.get(public_routes.tabs, (req, res, next) => {
  res.render(selected_layout, {
    title: "Tabs",
    page_path: "ui-interface/baseui/tabs",
    layout: selected_layout,
  });
});
route.get(public_routes.toasts, (req, res, next) => {
  res.render(selected_layout, {
    title: "Toasts",
    page_path: "ui-interface/baseui/toasts",
    layout: selected_layout,
  });
});
route.get(public_routes.tooltip, (req, res, next) => {
  res.render(selected_layout, {
    title: "Tooltip",
    page_path: "ui-interface/baseui/tooltip",
    layout: selected_layout,
  });
});
route.get(public_routes.typography, (req, res, next) => {
  res.render(selected_layout, {
    title: "Typography",
    page_path: "ui-interface/baseui/typography",
    layout: selected_layout,
  });
});
route.get(public_routes.video, (req, res, next) => {
  res.render(selected_layout, {
    title: "Video",
    page_path: "ui-interface/baseui/video",
    layout: selected_layout,
  });
});

// --------------- / Ui-Interface ---------------- //
// --------------- Settings ---------------- //

route.get(public_routes.settings, (req, res, next) => {
  res.render(selected_layout, {
    title: "Settings",
    page_path: "settings/settings",
    layout: selected_layout,
  });
});
route.get(public_routes.notifications, (req, res, next) => {
  res.render(selected_layout, {
    title: "Notifications",
    page_path: "settings/notifications",
    layout: selected_layout,
  });
});
route.get(public_routes.taxtypes, (req, res, next) => {
  res.render(selected_layout, {
    title: "Tax Types",
    page_path: "settings/taxtypes",
    layout: selected_layout,
  });
});
route.get(public_routes.preferences, (req, res, next) => {
  res.render(selected_layout, {
    title: "Preferences",
    page_path: "settings/preferences",
    layout: selected_layout,
  });
});
route.get(public_routes.expensecategory, (req, res, next) => {
  res.render(selected_layout, {
    title: "Expense Category",
    page_path: "settings/expensecategory",
    layout: selected_layout,
  });
});
route.get(public_routes.deleteaccount, (req, res, next) => {
  res.render(selected_layout, {
    title: "Delete Account",
    page_path: "settings/deleteaccount",
    layout: selected_layout,
  });
});
route.get(public_routes.changepassword, (req, res, next) => {
  res.render(selected_layout, {
    title: "Change Password",
    page_path: "settings/changepassword",
    layout: selected_layout,
  });
});

// --------------- / Settings ---------------- //
// --------------- " Redirect all " ---------------- //

route.get("*", function (req, res) {
  res.redirect(public_routes.dashboard);
});

{
  /* </Redirect> */
}

// --------------- " /Redirect all " ---------------- //

module.exports = route;

//referances
// route.get(public_routes.dashboard, (req, res, next) => {
//   res.render("layout", {
//     title: "Dashboard",
//     page_path: "dashboard/admindashboard",
//     layout: selected_layout,
//   });
// });
