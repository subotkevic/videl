function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function($1){return $1.toUpperCase().replace('-','');});
}

export default camelCase
