import os
from string import Template

with open(os.getcwd() + os.path.sep + 'data.txt') as f:
    text = f.read()

x = ''
n = 4
s = 1
for l in text.split('\n'):
    l = l.strip()
    if '§' in l:
        l = l.replace('Â','').replace('§','').strip()
        n += 1
        s = 1
        if '(' in l:
            l = l.split('(')[0].strip()
        t = Template(''']},{
            answerField: 'ehr_q10_$n',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___$n'] === '1',
            text: <span>$header (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [''')

        v = t.safe_substitute(n=n, header=l)
        x += v
    else:
        t = Template(''' {
                    answerField: '$af',
                    text: '$txt'
                },''')
        l = l[1:].strip()
        v = t.safe_substitute(af=f'ehr_q10_{n}___{s}', txt=l)
        x += v
        s += 1

with open(os.getcwd() + os.path.sep + 'new.test', 'w') as f:
    f.write(x)

'''
{
            answerField: 'ehr_q10_3',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___3'] === '1',
            text: <span>Epic certifications - Beacon (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_3___1',
                    text: 'Beacon Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_3___2',
                    text: 'Beacon Curriculum Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_3___3',
                    text: 'Beacon Curriculum Certification/Proficiency for Application Certified'
                },
                {
                    answerField: 'ehr_q10_3___4',
                    text: 'Ancillary Clinicals Training Environment Build Certification/Proficiency'
                }
            ]  
        }
'''        