/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	// req = HTTP Request
	// res = HTTTP Response

	'new': function(req, res) {
		res.view();
	},

	create: function(req, res, next) {
		Customers.create(req.params.all(), function customerCreated(err, customer) {
			if(err) {
				return next(err);
			}

			res.redirect('/customers/show/' + customer.id);
		});
	},

	show: function(req, res, next) {
		Customers.findOne(req.param('id'), function foundCustomer(err, customer) {
			if(err) {
				return next(err);
			}

			if(!customer) {
				return next();
			}

			res.view({
				customer: customer
			});
		});
	},

	index: function(req, res, next) {
		Customers.find(function foundCustomers(err, customers) {
			if(err) {
				return next(err);
			}

			res.view({
				customers: customers
			});
		});
	},

	edit: function(req, res, next) {
		Customers.findOne(req.param('id'), function foundCustomer(err, customer) {
			if(err) {
				return next(err);
			}

			if(!customer) {
				return next();
			}

			res.view({
				customer: customer
			});
		});
	},

	update: function(req, res, next) {
		Customers.update(req.param('id'), req.params.all(), function customerUpdated(err) {
			if(err) {
				return res.redirect('/customers/edit/' + req.param('id'));
			}

			res.redirect('/customers/show/' + req.param('id'));
		});
	},

	destroy: function(req, res, next) {
		Customers.destroy(req.param('id')).exec(function() {
			res.redirect('/customers/');
		});
	}

};

