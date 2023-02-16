export const load = ({ fetch, params }: any) => {
	const fetchProduct = async (id: any) => {
		const res = await fetch(
			'https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=df29903951f8497fb88520ada1b3a549'
		);
		const data = await res.json();

		return data.articles[id];
	};

	return {
		product: fetchProduct(params.newsId)
	};
};
