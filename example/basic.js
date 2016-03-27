var editor = window.ed = window.cee(
  document.querySelector('.content'),
  document.querySelector('.scroller')
)
editor.init({
  sectionParser: function(text) {
    var offset = 0, sectionList = []
      ;(text + '\n\n').replace(/^.+[ \t]*\n=+[ \t]*\n+|^.+[ \t]*\n-+[ \t]*\n+|^\#{1,6}[ \t]*.+?[ \t]*\#*\n+/gm, function(match, matchOffset) {
      sectionList.push(text.substring(offset, matchOffset))
      offset = matchOffset
    })
    sectionList.push(text.substring(offset))
    return sectionList
  }
})