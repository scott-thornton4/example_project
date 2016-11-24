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
	}
};

