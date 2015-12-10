navigation_init = ->
  $('.dropdown-button').dropdown()
  $('.button-collapse').sideNav()

$(document).on('page:change', navigation_init)
