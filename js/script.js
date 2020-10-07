function info(pkt, inform){

    var punkt = document.getElementById(pkt);
    var information = document.getElementById(inform);

    punkt.addEventListener('mouseenter', function (){
        information.classList.remove('hide');
        information.classList.add('show');
    })

    punkt.addEventListener('mouseleave', function (){
        information.classList.remove('show');
        information.classList.add('hide');
    })


}
info('cpu', 'cpuInfo');
info('ram', 'ramInfo');
info('PCI-E', 'PCIInfo');
info('SATA', 'SATAInfo');
info('CoolerConnect', 'CoolerConnectInfo');
info('HDMI i DisplayPort', 'HDMI i DisplayPortInfo');
info('M2-slot', 'M2-slotInfo');
info('AMD B550 Chipset', 'AMD B550 ChipsetInfo');

