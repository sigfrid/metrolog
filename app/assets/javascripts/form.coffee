@FieldToggler =
  toggle: (target) ->
    select = $('#'+target+'_select')
    input = $('#'+target+'_input_container')
    if select.attr('class') == 'initialized'
      select.material_select('destroy')
    else
      select.material_select()
    input.toggle()

$(document).on 'click', "[data-behavior~=toggle-field]", ->
  FieldToggler.toggle($(this).data('target'))

@SelectEnabler =
  enable: ->
    $('select').material_select()

@DatepickerEnabler =
  enable: ->
    $('.datepicker').pickadate
      format: 'd/mm/yyyy'
      max: new Date()

@Hider =
  enable: ->
    $("[data-behavior~=hidden]").each ->
      $(this).hide()

form_init = ->
  SelectEnabler.enable()
  DatepickerEnabler.enable()
  Hider.enable()

$(document).on('page:change', form_init)
