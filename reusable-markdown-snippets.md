# Reusable markdown snippets

## Usage

Example .md file:
```markdown
# Main file

Some text

{% partial file="./snippets/_snippet-example.md" /%}

{% html %}
<div>Some text</div>
<div>Some other text</div>
{% /html %}

More text
```

{% partial file="./snippets/_snippet-example.md" /%}