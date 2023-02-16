export const load = ({ fetch, params }: any) => {
	console.log(params);

	return {
		product: params
	};
};
