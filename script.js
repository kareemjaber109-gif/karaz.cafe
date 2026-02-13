// Simple and direct menu navigation
(function() {
    console.log('🚀 karaz menu loading...');
    
    // Wait for DOM to be fully loaded
    window.addEventListener('DOMContentLoaded', function() {
        console.log('✅ DOM loaded');
        
        const buttons = document.querySelectorAll('.button');
        const sections = document.querySelectorAll('.menu-section');
        
        console.log('Found', buttons.length, 'buttons and', sections.length, 'sections');
        
        // Activate first section immediately
        if (sections.length > 0 && buttons.length > 0) {
            sections[0].classList.add('active');
            buttons[0].classList.add('active');
            console.log('✅ First section activated (coffee)');
        }
        
        // Add click handlers
        buttons.forEach(function(btn, index) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                console.log('🖱️ Clicked:', category);
                
                // Remove all active classes
                buttons.forEach(b => b.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Add active to current
                this.classList.add('active');
                const targetSection = document.getElementById(category);
                if (targetSection) {
                    targetSection.classList.add('active');
                    console.log('✅ Showing:', category);
                } else {
                    console.error('❌ Section not found:', category);
                }
            });
        });
        
        console.log('🎉 Menu initialized successfully!');
    });
})();