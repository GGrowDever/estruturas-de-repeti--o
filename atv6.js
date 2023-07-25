function ehPrimo(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

for (let i = 30; i >= 1; i--) {
	if (ehPrimo(i)) {
		document.write('[' + i + ']');
	} else {
		document.write(i);
	}
}
