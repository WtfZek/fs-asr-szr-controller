// 动态获取协议
window.protocol = window.location.protocol.replace(':', '');
// 动态获取主机地址
// window.host = window.location.host;

// 测试环境的host
window.host = "192.168.3.188:8000";
// 根据 protocol 动态判断 ws 协议
window.wsProtocol = window.protocol === 'https' ? 'wss' : 'ws';