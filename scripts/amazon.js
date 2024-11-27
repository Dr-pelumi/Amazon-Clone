// data saving using combination of array and obje
// Generating HTML

let productsHTML = "";

products.forEach((product) => {
	productsHTML += `
   <div class="product-container">
					<div class="product-image-container">
						<img
							class="product-image"
							src="${product.image}"
							alt=""
						/>
					</div>

					<div class="product-name"> ${product.name}</div>

					<div class="product-rating-container">
						<img
							class="product-rating"
							src="./image/rating/rating-${product.rating.stars * 10}.png"
							alt=""
						/>
						<div class="rating-count link-primarys">${product.rating.count}</div>
					</div>

					<div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

					<div class="product-quantity-container">
						<select>
							<option selected value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>
					</div>

					<div class="product-spacer"></div>

					<div class="added-to-chart">
						<img src="./image/icons/checkmark.png" alt="" />
						Added
					</div>

					<button class="add-to-chart-button button-primary js-add-to-cart"
					data-product-id="${product.id}">
						Add to Chart
					</button>
				</div>
   `;
});

document.querySelector(".js-product-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
	button.addEventListener("click", () => {
		const productId = button.dataset.productId;

		let matchingItem;

		cart.forEach((item) => {
			if (productId === item.productId) {
				matchingItem = item;
			}
		});

		if (matchingItem) {
			matchingItem.quantity += 1;
		} else {
			cart.push({
				productId: productId,
				quantity: 1,
			});
		}

		console.log(cart);
	});
});
