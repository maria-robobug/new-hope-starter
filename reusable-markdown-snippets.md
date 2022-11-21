# Reusable markdown snippets

## Usage

Example .md file:

{% markdoc-example %}
```markdoc
# Main file

Some text

{% html %}
<div>Some text</div>
<div>Some other text</div>
{% /html %}

More text
```
{% /markdoc-example %}

{% partial file="./snippets/_snippet-example.md" %}
{% /partial %}