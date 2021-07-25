export function CSVToJsonParser(csv: string): any[] {
	const rows = csv.split(/\r\n/);
	const array: any = [];
	const columns = rows[0].split(',');

	for (let i = 1; i < rows.length; i++) {
		const item: any = {};
		const row = rows[i].split(',');

		for (let j = 0; j < columns.length; j++) {
			item[columns[j]] = row[j];
		}

		array.push(item);
	}

	return array;
}