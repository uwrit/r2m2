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
        x += f"'ehr_q10_{n}'     |\n"
    else:
        l = l[1:].strip()
        v = f"'ehr_q10_{n}___{s}'     |\n"
        x += v
        s += 1

with open(os.getcwd() + os.path.sep + 'new.ts', 'w') as f:
    f.write(x)