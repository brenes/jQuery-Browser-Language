/*!
 * jQuery-Browser-Language jQuery plugin v0.0.1
 *
 * Copyright 2010 by Dan Singerman <dansingerman@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */

(function($){

   $.browserLanguage = function(url_check, callback){
     var language;
     $.ajax({
         url: url_check,
         dataType: 'json',
         success: function(headers) {
               split_languages = headers['Accept-Language'].split(",");
               languages = []
               for(i in split_languages){ 
                    language = split_languages[i].split(";")
                    languages[i] = language[0]
               }

             callback(languages, headers['Accept-Language']);
         }
     });
   }

})(jQuery);