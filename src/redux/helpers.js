export const equipmentFilter = (arr1, arr2) => {
	const arr = [];
	arr2.map((item, index) => {
		if (item) {
			arr.push(`${arr1[index].name}` + "=true");
		}
	});
	return arr.join("&");
};
