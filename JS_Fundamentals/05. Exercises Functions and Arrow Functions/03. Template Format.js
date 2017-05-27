

function printTemplates(input) {
    let template = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>
`;

    function printTemplate([str1, str2]) {
        template += `<question>
    ${str1}
  </question>
  <answer>
    ${str2}
  </answer>\n`;
    }

    for (let i = 0; i < input.length - 1; i += 2) {
        let [question, answer] = [input[i], input[i + 1]];
        printTemplate([question, answer]);
    }
    template += '</quiz>';

    console.log(template);
}