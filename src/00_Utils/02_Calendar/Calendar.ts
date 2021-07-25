export class Calendar {
	public static getCurrentTimeString(): string {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();
		return `${year.toString().padStart(4, '0')}_${month.toString().padStart(2, '0')}_${day.toString().padStart(2, '0')}_${hour.toString().padStart(2, '0')}H_${minute.toString().padStart(2, '0')}M_${second.toString().padStart(2, '0')}S`;
	}
}