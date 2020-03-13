import os

with open(os.getcwd() + os.path.sep + 'data.txt') as f:
    text = f.read()

with open(os.getcwd() + os.path.sep + 'metadata.csv') as f:
    csv = f.read()

started = False
n = 1
q = 10
for l in text.split('\n'):
    l = l.strip()
    if '§' in l:
        if started:
           csv += '",,,,,,,,,,,,\n' 
        l = '\n' + l.replace('Â','').replace('§','').strip()
        q = q+1
        n = 1
        if '(' in l:
            l = l.split('(')[0].strip()
        csv += f'ehr_q10_{q},ehr,,checkbox,Epic certifications - {l} ,"'
        started = True
    else:
        if n > 1:
            csv += '| '
        csv += f'{n}, {l[1:].strip()}'

with open(os.getcwd() + os.path.sep + 'new.csv', 'w') as f:
    f.write(csv)