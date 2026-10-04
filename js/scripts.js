$(function () {
    // <><><> simulated search results for the site search page <><><>
    
    // search results for the site search page
    var SEARCH_KEYPHRASE = 'caffeine';
    var $blendGrid = $('.blend-grid');

    // only run search on list page
    if ($blendGrid.length) {
        // get what user submitted in the search form
        var params = new URLSearchParams(window.location.search);
        var submittedText = params.get('q') || '';
        var submittedPhrase = submittedText.trim().toLowerCase();

        // show what the user typed
        $('.search-term').text(submittedText);

        // keep typed phrase in header search input
        $('.site-search input[name="q"]').val(submittedText);

        // if the user typed the search phrase, show results
        if (submittedPhrase === SEARCH_KEYPHRASE) {
            $blendGrid.children('.card').each(function (){
                var $card = $(this);
                // get the ingredients for this blend
                var ingredients = $card.attr('data-ingredients') || '';
                // filter out cards that aren't relevant
                $card.prop('hidden', ingredients.indexOf(SEARCH_KEYPHRASE) === -1);
            });
            $('#search-summary').prop('hidden', false);
        }
        // no search submitted
        else if (submittedPhrase == '') {
            // do nothing
        }
        else {
            // hide all cards
            $blendGrid.prop('hidden', true);
            // show no results message
            $('#search-none').prop('hidden', false);
        }
    }


    // <><><> login/sign-up <><><>
    // open modal
    // close modal
    // submit modal form

    // <><><> product selection blend summary info updates <><><>

})