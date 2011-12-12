# Prototype af design af m.bibliotek.dk

# Ændringer

Teknisk:

- skift fra xhtml-mp til html5 / JQueryMobile (da vi alligevel ikke behøver at fungere på low-end telefoner)
- diverse styling i `bibdk.css`
- fjernet inline style, ie `<blah style="...">`
- fjernet link til `javascript:openOrCloseBlock` og har erstattet scriptet med script der selv binder på `.mainitem` (mere fingervenligt da man blot skal ramme kassen, og ikke kun linket)
- ændret søgefelt til at bruge jqm-widgets/layout (mere fingervenligt)
- erstattet img-tabs med en footer/navbar (mere fingervenligt, og minde mere om den typiske navigation på telefoner)

