var nextStepUrl = baseUrl + 'selectcolor';
var buttUrl = baseUrl + 'butts/';

$(document).ready(
	function() {

		executeIfHas(['tcart', 'getProductBySkuPrefix', 'setTcart__addProductProduct'],
			function() {

				var rifle = getProductBySkuPrefix('R');

				if (rifle.length > 0) {
					$('a:contains("Ложе")').attr('href', buttUrl + rifle[0].sku.trim());
				} else {
					$('.t758__wrapper').hide();
				}

				setTcart__addProductProduct(
					product => location.href = (product.sku.trim() === 'MG-08'||product.sku.trim() === 'MG_08') ? (nextStepUrl + "_mg_08") : nextStepUrl,
					(p) => !(p.sku && p.sku.trim().startsWith("R")));
			});
	});
