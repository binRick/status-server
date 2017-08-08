module.exports = {
        port: 8080,
        hostname: '0.0.0.0',
        services: [{
                name: 'sqlServer1-3306-sql',
                label: 'MySQL :: sqlServer1',
                check: 'tcp',
                host: '10.177.155.110',
                port: '3306',
                group: 'SQL Servers'
            },
            {
                name: 'sqlServer2-3306-sql',
                label: 'MySQL :: sqlServer2',
                check: 'tcp',
                host: '10.177.155.111',
                port: '3306',
                group: 'SQL Servers'
            },
            {
                name: 'sqlServer3-3306-sql',
                label: 'MySQL :: sqlServer3',
                check: 'tcp',
                host: '10.177.155.112',
                port: '3306',
                group: 'SQL Servers'
            },
            {
                name: 'sqlRouter1-6033-sql',
                label: 'SQL Proxy :: sqlRouter1',
                check: 'tcp',
                host: '10.177.155.130',
                port: '6033',
                group: 'SQL Proxies'
            },
            {
                name: 'sqlRouter2-6033-sql',
                label: 'SQL Proxy :: sqlRouter2',
                check: 'tcp',
                host: '10.177.155.131',
                port: '6033',
                group: 'SQL Proxies'
            },
            {
                name: 'sqlRouter3-6033-sql',
                label: 'SQL Proxy :: sqlRouter3',
                check: 'tcp',
                host: '10.177.155.132',
                port: '6033',
                group: 'SQL Proxies'
            },
            {
                name: 'wwwServer1-80-login',
                label: 'HTTP /login :: wwwServer1',
                check: 'tcp',
                host: '10.177.155.20',
                port: '80',
                path: '/login',
                group: 'WWW'
            },
            {
                name: 'wwwServer2-80-login',
                label: 'HTTP /login :: wwwServer2',
                check: 'tcp',
                host: '10.177.155.21',
                port: '80',
                path: '/login',
                group: 'WWW'
            },
            {
                name: 'wwwServer3-80-login',
                label: 'HTTP /login :: wwwServer3',
                check: 'tcp',
                host: '10.177.155.22',
                port: '80',
                path: '/login',
                group: 'WWW'
            },
            {
                name: 'loadBalancer1-80-login',
                label: 'HTTP /login :: loadBalancer1',
                check: 'tcp',
                host: '10.177.155.10',
                port: '80',
                path: '/login',
                group: 'WWW'
            },
            {
                name: 'loadBalancer2-80-login',
                label: 'HTTP /login :: loadBalancer2',
                check: 'tcp',
                host: '10.177.155.11',
                port: '80',
                path: '/login',
                group: 'WWW'
            },
            {
                name: 'loadBalancer3-80-login',
                label: 'HTTP /login :: loadBalancer3',
                check: 'tcp',
                host: '10.177.155.12',
                port: '80',
                path: '/login',
                group: 'WWW'
            },
            {
                name: 'stagingServer-80-login',
                label: 'HTTP /login :: stagingServer',
                check: 'tcp',
                host: '10.177.155.250',
                port: '80',
                path: '/login',
                group: 'Staging'
            },
            {
                name: 'stagingServer-443-login',
                label: 'HTTPs /login :: stagingServer',
                check: 'tcp',
                host: '10.177.155.250',
                port: '443',
                path: '/login',
                group: 'Staging'
            },
            {
                name: 'dnsServer1-A',
                label: 'DNS gradeboxsis.com A :: dnsServer1',
                check: 'dns',
                domain: 'gradeboxsis.com',
                server: '10.177.155.120',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer1-cluster-A',
                label: 'DNS cluster.gradeboxsis.com A :: dnsServer1',
                check: 'dns',
                domain: 'cluster.gradeboxsis.com',
                server: '10.177.155.120',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer1-www-A',
                label: 'DNS www.gradeboxsis.com A :: dnsServer1',
                check: 'dns',
                domain: 'www.gradeboxsis.com',
                server: '10.177.155.120',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer1-mail-A',
                label: 'DNS mail.gradeboxsis.com A :: dnsServer1',
                check: 'dns',
                domain: 'mail.gradeboxsis.com',
                server: '10.177.155.120',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer1-MX',
                label: 'DNS gradeboxsis.com MX :: dnsServer1',
                check: 'dns',
                domain: 'gradeboxsis.com',
                server: '10.177.155.120',
                record: 'A',
                group: 'DNS'
            },

            {
                name: 'dnsServer2-A',
                label: 'DNS gradeboxsis.com A :: dnsServer2',
                check: 'dns',
                domain: 'gradeboxsis.com',
                server: '10.177.155.121',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer2-cluster-A',
                label: 'DNS cluster.gradeboxsis.com A :: dnsServer2',
                check: 'dns',
                domain: 'cluster.gradeboxsis.com',
                server: '10.177.155.121',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer2-www-A',
                label: 'DNS www.gradeboxsis.com A :: dnsServer2',
                check: 'dns',
                domain: 'www.gradeboxsis.com',
                server: '10.177.155.121',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer2-mail-A',
                label: 'DNS mail.gradeboxsis.com A :: dnsServer2',
                check: 'dns',
                domain: 'mail.gradeboxsis.com',
                server: '10.177.155.121',
                record: 'A',
                group: 'DNS'
            },
            {
                name: 'dnsServer2-MX',
                label: 'DNS gradeboxsis.com MX :: dnsServer2',
                check: 'dns',
                domain: 'gradeboxsis.com',
                server: '10.177.155.121',
                record: 'A',
                group: 'DNS'
            },

        ]
    };
