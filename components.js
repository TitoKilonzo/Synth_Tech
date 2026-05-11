document.addEventListener('DOMContentLoaded', function() {
    
    // --- THIS IS THE HEADER CODE ---
    const headerHTML = `
    <nav class="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm" id="mainNav">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
                    <a href="/" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center text-brand-accent shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform duration-300">
                            <i class="fa-solid fa-layer-group text-xl"></i>
                        </div>
                        <span class="font-bold text-2xl text-brand-dark tracking-tight">SynthLink<span class="text-brand-accent">Tech</span></span>
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="nav-link text-brand-dark font-bold border-b-2 border-brand-accent px-1 pt-1">Home</a>
                    <a href="about" class="nav-link text-gray-600 hover:text-brand-dark hover:border-brand-accent/50 border-b-2 border-transparent px-1 pt-1 transition-all duration-300">About</a>
                    <a href="services" class="nav-link text-gray-600 hover:text-brand-dark hover:border-brand-accent/50 border-b-2 border-transparent px-1 pt-1 transition-all duration-300">Services</a>
                    <a href="contact" class="nav-link text-gray-600 hover:text-brand-dark hover:border-brand-accent/50 border-b-2 border-transparent px-1 pt-1 transition-all duration-300">Contact</a>
                </div>

                <!-- CTA Button -->
                <div class="hidden md:block">
                    <a href="contact" class="bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-light hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 transform hover:-translate-y-0.5">
                        Get Started
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobileMenuBtn" class="text-gray-600 hover:text-brand-dark focus:outline-none p-2 rounded-md hover:bg-gray-100 transition">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu Dropdown -->
        <div id="mobileMenu" class="hidden md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-xl">
            <div class="px-4 pt-2 pb-6 space-y-1">
                <a href="/" class="block px-4 py-3 text-base font-medium text-brand-accent bg-brand-dark/5 rounded-md">Home</a>
                <a href="about" class="block px-4 py-3 text-base font-medium text-gray-600 hover:text-brand-dark hover:bg-gray-50 rounded-md">About</a>
                <a href="services" class="block px-4 py-3 text-base font-medium text-gray-600 hover:text-brand-dark hover:bg-gray-50 rounded-md">Services</a>
                <a href="contact" class="block px-4 py-3 text-base font-medium text-gray-600 hover:text-brand-dark hover:bg-gray-50 rounded-md">Contact</a>
            </div>
        </div>
    </nav>
    `;

    // --- THIS IS THE FOOTER CODE ---
    const footerHTML = `
    <footer class="bg-[#020D18] text-gray-400 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 lg:col-span-2">
                    <div class="flex items-center gap-2 mb-6 text-white">
                        <div class="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-brand-dark"><i class="fa-solid fa-layer-group text-sm"></i></div>
                        <span class="font-bold text-xl tracking-wide">SynthLink</span>
                    </div>
                    <p class="text-gray-400 leading-relaxed mb-8 max-w-sm">Empowering businesses across East Africa with next-generation ICT solutions. From network infrastructure to intelligent software, we build the future of connectivity.</p>
                    <div class="flex space-x-4">
                        <a href="https://wa.me/254741563880" target="_blank" class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1"><i class="fa-brands fa-whatsapp text-lg"></i></a>
                        <a href="https://x.com/synthlinktech" target="_blank" class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"><i class="fa-brands fa-x-twitter text-lg"></i></a>
                        <a href="https://linkedin.com/company/synthlinktech" target="_blank" class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1"><i class="fa-brands fa-linkedin-in text-lg"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6 text-lg">Company</h4>
                    <ul class="space-y-4"><li><a href="about" class="hover:text-brand-accent transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs opacity-50"></i> About Us</a></li><li><a href="services" class="hover:text-brand-accent transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs opacity-50"></i> Services</a></li><li><a href="contact" class="hover:text-brand-accent transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs opacity-50"></i> Contact</a></li></ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6 text-lg">Contact Info</h4>
                    <ul class="space-y-4 text-sm"><li class="flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5"><i class="fa-solid fa-location-dot"></i></div><div class="text-gray-400"><span class="block text-white font-medium">Address</span>Nairobi, Kenya</div></li><li class="flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-accent mt-0.5"><i class="fa-solid fa-envelope"></i></div><div class="text-gray-400"><span class="block text-white font-medium">Email</span>info@synthlinktech.com</div></li></ul>
                </div>
            </div>
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"><p>&copy; 2026 SynthLink Technologies. All rights reserved.</p></div>
        </div>
    </footer>
    `;

    // --- LOGIC TO LOAD THEM ---
    // 1. Find the placeholder divs in your HTML
    const headerContainer = document.getElementById('header');
    const footerContainer = document.getElementById('footer');

    // 2. Put the code inside them
    if(headerContainer) headerContainer.innerHTML = headerHTML;
    if(footerContainer) footerContainer.innerHTML = footerHTML;

    // 3. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if(mobileBtn && mobileMenu){
        mobileBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    }
});