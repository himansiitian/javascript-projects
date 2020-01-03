class Productlist extends React.Component {
	render() {
		const product= Seed.products.map((product) => (
			<Product />
		));
	}
}

ReactDOM.render (
	<Productlist />
	document.getElementById('content')
);

class Product extends React.Component {
	render() {
		return (
			
		);
	}
}

