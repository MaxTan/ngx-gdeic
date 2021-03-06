interface Date {
    addHours(diff: number): Date;
    toDateString(format: string): string;
}

(function (_) {
    Object.defineProperties(_.prototype, {
        addHours: {
            value: function addHours(diff: number) {
                diff = Math.floor(diff);
                this.setHours(this.getHours() + diff);
                return this;
            },
            writable: false,
            enumerable: false
        },
        toDateString: {
            value: function toDateString(format) {
                if (!format) {
                    return this.toString();
                }
                if (/y{4}/.test(format)) {
                    format = format.replace(/y{4}/g, this.getFullYear());
                }
                if (/y{2}/.test(format)) {
                    format = format.replace(/y{2}/g, this.getFullYear().toString().substr(2));
                }
                if (/MM/.test(format)) {
                    format = format.replace(/MM/g, (this.getMonth() + 1).toString().padStart(2, '0'));
                }
                if (/dd/.test(format)) {
                    format = format.replace(/dd/g, this.getDate().toString().padStart(2, '0'));
                }
                if (/HH/.test(format)) {
                    format = format.replace(/HH/g, this.getHours().toString().padStart(2, '0'));
                }
                if (/hh/.test(format)) {
                    var hour = this.getHours();
                    format = format.replace(/hh/g, (hour < 12 ? hour : hour - 12).toString().padStart(2, '0'));
                }
                if (/mm/.test(format)) {
                    format = format.replace(/mm/g, this.getMinutes().toString().padStart(2, '0'));
                }
                if (/ss/.test(format)) {
                    format = format.replace(/ss/g, this.getSeconds().toString().padStart(2, '0'));
                }
                return format;
            },
            writable: false,
            enumerable: false
        }
    });
}(Date));