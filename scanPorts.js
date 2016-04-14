/**
 * Created by zhoujialin on 2016/4/14.
 */
'use strict';

// ���� net ģ��
const  net = require('net');
// ������ģ��
// ��ģ����Ҫ��װ��npm install progress
// �û���ʾɨ��˿���ɽ���
const ProgressBar = require('progress');

/**
 * �˿�ɨ�躯��
 *
 * @param host {String} ɨ��˿ڵ�IP/URL��ַ
 * @param start {Number} ��ʼ�˿�
 * @param end {Number} �����˿�
 * @return {Promise} ����һ��Promise����
 */
function checkPorts(host, start, end){
    // ����Promise
    return new Promise((resolve, reject) => {
            let counts = end - start + 1; // ��Ҫɨ���IP����
            let ports = []; // ��������ӵ�IP

            // ����������
            let bar = new ProgressBar('scanning [:bar] :percent :etas', {
                complete: '#',
                incomplete: '',
                width: 50,
                total: counts,
            });

            // ѭ��ɨ������IP
            for(let i = start; i <= end; ++i){
                // ʹ�� net.connect() �������Ӷ˿�
                let check = net.connect({
                    host: host,
                    port: i,
                }, () => {
                    // ���ӳɹ�����ʾ�˶˿��ǿ��ŵ�
                    // ����˶˿�
                    ports.push(i);
                    // �����ϣ��Ͽ�������
                    check.destroy();
                });

                check.on('close', () => {
                    // check.destroy() �ᴥ�� close�¼�
                    // �������Ӷ˿�Ҳ�ᴥ�� close�¼��Ͽ�����

                    // ÿ�Ͽ�һ�����ӣ�˵���ͼ�������һ���˿�
                    counts--;

                    // ��ʾ������
                    bar.tick(1);

                    // ��ʱ����������ж˿�
                    if(counts === 0){
                        if(ports.length){
                            resolve(ports);
                        }else{
                            reject('no port is open');
                        }
                    }
                });

                check.on('error', (err) => {
                   // �˿�δ����ʱ�����ӻ�ʧ��
                   // ��ʱ�ᴥ�� error �¼�
                   // Ȼ��ᴥ�� close �¼�

                });

            }

        });

}

/**
 * �����˿�ɨ���װ����
 *
 * @param host {String} ɨ��˿ڵ�IP/URL��ַ
 * @param start {Number} ��ʼ�˿�
 * @param end {Number} �����˿�
 * @param callback {function} �ص�����
 */
module.exports = (host, start, end, callback) => {
    // ��⺯��
    // ���ֻ������������������end��һ������
    // ��ô�Զ�����������
    if(typeof end === 'function' && callback === undefined){
        callback = end;
        end = start;
    }

    // ���ú���ɨ��˿�
    checkPorts(host, start, end).then((ports) => {
       callback(ports);
    }).catch((err) => {
        console.log(err);
    });

}









