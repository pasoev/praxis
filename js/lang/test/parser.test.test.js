import { inputStream } from "../src/istream";
import { tokenStream } from "../src/tstream";
import { parse } from "../src/parser";

QUnit.test("hello test", function(assert) {
    let istream = inputStream('lambda (x) 10');
    let tstream = tokenStream(istream);

    assert.ok(istream.peek() === "l", "character stream");
    
    let parsed = parse(tstream);
    console.log(JSON.stringify(parsed));

    // const token = tstream.next();
    // assert.equal(token.type, "num", "type: number");
    // assert.equal(token.value, 123, "value: number");
});