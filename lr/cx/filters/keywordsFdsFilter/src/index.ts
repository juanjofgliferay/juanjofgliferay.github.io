type FilterData = string;

function descriptionBuilder(selectedData: FilterData): string {
	return selectedData;
}

function htmlElementBuilder({
	fieldName,
	filter,
	setFilter,
}: any): HTMLElement {
	const input = document.createElement('input');

	if (filter.selectedData) {
		input.value = filter.selectedData;
	}
	else {
		input.value = `${fieldName} eq ...`;
	}

	input.className = 'form-control';
	input.placeholder = `Search by ${fieldName}`;

	const button = document.createElement('button');

	button.className = 'btn btn-block btn-secondary btn-sm mt-2';
	button.innerText = 'Submit';
	button.onclick = () =>
		setFilter({
			selectedData: `${fieldName}/any(k:contains(k, '${input.value}'))`,
		});

	const div = document.createElement('div');

	div.className = 'dropdown-item';

	div.appendChild(input);
	div.appendChild(button);

	return div;
}

function oDataQueryBuilder(selectedData: FilterData): string {
	return selectedData;
}

const fdsFilter = {
	descriptionBuilder,
	htmlElementBuilder,
	oDataQueryBuilder,
};

export default fdsFilter;
