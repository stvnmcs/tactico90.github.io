// TÁCTICO 90 – Field Report Interface
document.addEventListener('DOMContentLoaded', () => {
    // Instant appearance with texture
    document.body.style.opacity = '0'
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease'
        document.body.style.opacity = '1'
    }, 50)

    // Archive functionality
    const archiveItems = document.querySelectorAll('.archive-item')
    let openItem = null

    archiveItems.forEach(item => {
        const title = item.querySelector('.archive-title')
        const content = item.querySelector('.archive-content')

        // Initialize closed
        content.style.maxHeight = '0'

        title.addEventListener('click', (e) => {
            e.preventDefault()

            if (openItem === item) {
                // Close current
                content.style.maxHeight = '0'
                item.classList.remove('open')
                openItem = null
                
                // Reset hover effect
                title.style.transform = ''
            } else {
                // Close previous
                if (openItem) {
                    const prevContent = openItem.querySelector('.archive-content')
                    prevContent.style.maxHeight = '0'
                    openItem.classList.remove('open')
                    const prevTitle = openItem.querySelector('.archive-title')
                    prevTitle.style.transform = ''
                }

                // Open new with mechanical feel
                content.style.maxHeight = content.scrollHeight + 'px'
                item.classList.add('open')
                openItem = item
                title.style.transform = 'translateY(-2px)'

                // Scroll into view with offset
                setTimeout(() => {
                    const rect = item.getBoundingClientRect()
                    const offset = 150
                    const scrollPos = window.scrollY + rect.top - offset
                    
                    window.scrollTo({
                        top: scrollPos,
                        behavior: 'smooth'
                    })
                }, 100)
            }
        })

        // Mechanical hover effect
        title.addEventListener('mouseenter', () => {
            if (openItem !== item) {
                title.style.transform = 'translateY(-2px)'
            }
        })

        title.addEventListener('mouseleave', () => {
            if (openItem !== item) {
                title.style.transform = ''
            }
        })
    })

    // Footer appearance on scroll
    const footer = document.querySelector('.footer')
    if (footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('visible')
                    observer.unobserve(footer)
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        })

        observer.observe(footer)
    }

    // Close archive on click outside
    document.addEventListener('click', (e) => {
        if (openItem && !openItem.contains(e.target)) {
            const content = openItem.querySelector('.archive-content')
            content.style.maxHeight = '0'
            openItem.classList.remove('open')
            const title = openItem.querySelector('.archive-title')
            title.style.transform = ''
            openItem = null
        }
    })

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && openItem) {
            const content = openItem.querySelector('.archive-content')
            content.style.maxHeight = '0'
            openItem.classList.remove('open')
            const title = openItem.querySelector('.archive-title')
            title.style.transform = ''
            openItem = null
        }
    })

    // Add glitch effect to hero headline on hover
    const headline = document.querySelector('.headline')
    if (headline) {
        headline.addEventListener('mouseenter', () => {
            headline.style.transform = 'translateX(2px)'
            setTimeout(() => {
                headline.style.transform = 'translateX(-1px)'
                setTimeout(() => {
                    headline.style.transform = ''
                }, 50)
            }, 50)
        })
    }

    // Add subtle sticker shuffle on footer links hover
    const stickers = document.querySelectorAll('.sticker')
    stickers.forEach(sticker => {
        sticker.addEventListener('mouseenter', () => {
            // Slight shuffle effect on neighboring stickers
            stickers.forEach(s => {
                if (s !== sticker) {
                    const currentRotate = s.style.transform.match(/rotate\(([^)]+)\)/)
                    const baseRotate = s.classList.contains('sticker-tilt') ? -1 : 0
                    const newRotate = baseRotate + (Math.random() * 0.5 - 0.25)
                    s.style.transform = s.style.transform.replace(/rotate\([^)]*\)/, '') + ` rotate(${newRotate}deg)`
                }
            })
        })

        sticker.addEventListener('mouseleave', () => {
            // Reset rotations
            stickers.forEach(s => {
                const baseRotate = s.classList.contains('sticker-tilt') ? -1 : 0
                s.style.transform = s.style.transform.replace(/rotate\([^)]*\)/, '') + ` rotate(${baseRotate}deg)`
            })
        })
    })
})