//var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | turquoise | violet | white | yellow ;'

//mbox
/*
  play
  pause
  next
  previous
*/

type GrammarOptionsRule = {
  key: string
  values: string[]
  mode: 'public' | 'private'
}

type GrammarOptions = {
  namespace: string
  rules: GrammarOptionsRule[]
}

export const buildGrammarString = (options: GrammarOptions) => {
  const rules = options.rules.map(
    ({ key, values, mode }) => `${mode} <${key}> = ${values.join(' | ')};`
  )

  return `
  #JSGF V1.0;

  grammar ${options.namespace};

  ${rules.join('\n')}
  `
}
