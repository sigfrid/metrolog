// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize
//= require typeahead
//= require_tree .

  $(document).ready(function(){
    $('.modal-trigger').leanModal();

    var equipment_tokens = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: equipments
    });

    var equipment_typeahead = $('#equipment_input').typeahead(
    {
      hint: false,
      highlight: true,
      minLength: 1,
      classNames: {
          menu: 'typeahead-content',
          highlight: 'typeahead-highlight',
          cursor: 'typeahead-cursor',
          dataset: 'typeahead-dataset',
          suggestion: 'typeahead-suggestion'
      }
    },
    {
      name: 'equipments',
      source: equipment_tokens,
      templates: {
        empty: [
          '<div class="typeahead-notfound">Not Found!</div>'
        ]
      }
    });

    // Litle hack for Materializecss bug with label.
    equipment_typeahead.unwrap();
  });

var equipments = [  'Autoclave Fedegari FOW4 - PV19',
                    'Thermistor Pt-100 TE1',
                    'Thermistor Pt-100 TE2',
                    'Thermistor Pt-100 TE3',
                    'Thermistor Pt-100 TE4' ];
