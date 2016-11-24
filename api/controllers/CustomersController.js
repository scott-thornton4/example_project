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
		Customer.create(req.params.all(), function customerCreated(err, customer) {
			if(err) {
				return next(err);
			}

			// res.json(customer);
			res.redirect('/customer/show/' + customer.id);
		});
	}
};

