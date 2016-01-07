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

    var activity_tokens = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: activities
    });

    var equipment_typeahead = $('.eqtypeahead').typeahead(
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

    var activity_typeahead = $('.actypeahead').typeahead(
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
      name: 'activities',
      source: activity_tokens,
      templates: {
        empty: [
          '<div class="typeahead-notfound">Not Found!</div>'
        ]
      }
    });

    activity_typeahead.unwrap();


    $(".active-trigger").click(function(event){
      event.preventDefault();
      $('#'+$(this).data("target")).prop("disabled", false);
    });

  });

var equipments = [  'Autoclave Fedegari FOW4 - PV19',
                    'Heat exchanger ABC HE1',
                    'Pneumatic valve XXX VP201',
                    'Pneumatic valve XXX VP202',
                    'Pneumatic valve XXX VP203',
                    'Pneumatic valve XXX VP204',
                    'Pneumatic valve XXX VP205',
                    'Pneumatic valve XXX VP206',
                    'Pneumatic valve XXX VP207',
                    'Pneumatic valve XXX VP208',
                    'Pneumatic valve XXX VP209',
                    'Pneumatic valve XXX VP212',
                    'Recirculation pump P-MAX RP1',
                    'Thermistor Pt-100 TE2',
                    'Thermistor Pt-100 TE3',
                    'Thermistor Pt-100 TE4',
                    'Thermistor Pt-100 TE5',
                    'Thermistor Pt-100 TE9',
                    'Thermistor Pt-100 TE10' ];

 var activities = [ '121°C check',
                    'Calibration',
                    'Closing doors: limit switch closing and opening doors check',
                    'Closing doors: seal and alignment photocell check',
                    'Check mains water filter clogging',
                    'Check steam filter clogging',
                    'Check water level indicator',
                    'Compressed air circuit seal check',
                    'Compressed air filter replacement',
                    'External visual inspection',
                    'Gasket cover seal mains water filter replacement',
                    'Gasket cover seal steam filter replacement',
                    'Heat distribution in chamber verification in absence of load',
                    'Heat penetration in chamber in presence of maximum load 50/100 ml bags',
                    'Heat penetration in chamber in presence of maximum load 150/200 ml bags',
                    'Heat penetration twist off in presence of maximum load',
                    'Heat penetration verification in chamber in presence of minimum load 50/100 ml',
                    'Heat penetration verification in chamber in presence of minimum load 150/200 ml',
                    'Pressure leak verification',
                    'Pressure transducer control',
                    'Safety valves replacement',
                    'Seals disassembly and inspection',
                    'seals leak control',
                    'Usage verification']
