let wordsToIgnore = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];

function acronymize(words) {
    let acronym = "";
    words.split('-').forEach(function(el) {
        if (!wordsToIgnore.includes(el)) {
            acronym += el.charAt(0).toUpperCase();
        }
    });

    return acronym;
}

function generateBC(url, separator) {
    let parts = url.replace(/.*:\/\//g, "").split('/');
    let middle, last;

    if (!/index\.[^/.]+$/.test(parts[parts.length - 1])) {
        middle = parts.slice(1, -1);
        last = parts[parts.length - 1];
    } else {
        middle = parts.slice(1, -2);
        last = parts[parts.length - 2];
    }

    let crumbs = [
        '<a href="/">HOME</a>', // root/home
    ];

    middle.forEach(function(part, i) {
        let partAcronym = part.toUpperCase().replace(/-/g, ' ');
        if (part.length > 30) {
            partAcronym = acronymize(part);
        }
        crumbs.push(`<a href="/${middle.slice(0, i + 1).join('/')}/">${partAcronym.toUpperCase()}</a>`);
    });

    console.log(last);

    if (middle.length > 0) {
        let lastAcronym = last.toUpperCase().replace(/-/g, ' ');
        if (last.length > 30) {
            lastAcronym = acronymize(last);
        }
        crumbs.push(`<span class="active">${lastAcronym.replace(/\.[^/.]+$/, "").split('?')[0].toUpperCase()}</span>`); // last element
    }
    return crumbs.join(separator);
}

console.log(generateBC("www.microsoft.com/docs/index.htm", " * "));
console.log('<a href="/">HOME</a> * <span class="active">DOCS</span>');
console.log(generateBC('http://google.ca?rank=recent_first&hide=sold', ' # '));
console.log(generateBC('agcpartners.co.uk/bladder-immunity-research-meningitis-the-bladder-insider/games#conclusion', ' * '));