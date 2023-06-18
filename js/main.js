function convert()
{
    let markdown = document.getElementById("markdown_input").value;
    let mdp = makeMDP();
    let output = mdp.convert(markdown);
    let output_element = document.getElementById("bahacode_output");
    output_element.textContent = output;
}
function copy_output()
{
    let output_element = document.getElementById("bahacode_output");
    output_element.select();
    document.execCommand("copy");
}
window.onload = function()
{
    document.getElementById("markdown_input").value = "# Heading 1\r\n\r\n## Heading 2\r\n\r\n### Heading 3\r\n\r\nhr\r\n--------\r\n\r\n**Bold Text**\r\n\r\n*Italic Text*\r\n\r\n***Bold and Italic Text***\r\n\r\n[Link to bahamut](https://www.gamer.com.tw)\r\n\r\n![bahamut Post](https://i2.bahamut.com.tw/forum/post_advocacy.png)\r\n\r\n> Blockquote\r\n\r\n- List Item 1\r\n- List Item 2\r\n    - Sublist Item 1\r\n    - Sublist Item 2\r\n- List Item 3\r\n\r\n1. Ordered Item 1\r\n2. Ordered Item 2\r\n    1. Sublist Item A\r\n    2. Sublist Item B\r\n3. Ordered Item 3\r\n\r\nThis is `Inline code` in the line\r\n```python\r\n# Code block\r\nprint('Hello World!)\r\n```";
}