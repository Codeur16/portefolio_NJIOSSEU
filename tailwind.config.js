/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './data/**/*.{js,ts,jsx,tsx}',
    ],
    prefix: "",
    theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
                // Animations pour le background futuriste
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'twinkle': {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' }
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.7' }
                },
                'spin-slow': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' }
                },
                'scan': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'rainbow-border': {
                    '0%, 100%': { 
                        backgroundPosition: '0% 50%'
                    },
                    '50%': { 
                        backgroundPosition: '100% 50%'
                    }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-500px 0' },
                    '100%': { backgroundPosition: '500px 0' }
                },
                'neon-pulse': {
                    '0%, 100%': { 
                        textShadow: '0 0 5px currentColor, 0 0 10px currentColor',
                        opacity: '1'
                    },
                    '50%': { 
                        textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
                        opacity: '0.8'
                    }
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                }
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
                // Nouvelles animations
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float-slow 8s ease-in-out infinite',
                'twinkle': 'twinkle 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
                'spin-slow': 'spin-slow 20s linear infinite',
                'spin-slower': 'spin-slow 30s linear infinite',
                'scan': 'scan 2s linear infinite',
                'rainbow-border': 'rainbow-border 3s ease infinite',
                'shimmer': 'shimmer 2s infinite linear',
                'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 3s ease infinite'
    		},
            // Extensions de background
            backgroundImage: {
                'grid-pattern': 'linear-gradient(to right, rgba(120,119,198,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,119,198,0.1) 1px, transparent 1px)',
                'radial-gradient': 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), var(--color1, rgba(147, 51, 234, 0.1)), transparent 50%)',
            },
            // Extensions de box-shadow
            boxShadow: {
                'neon': '0 0 20px rgba(59, 130, 246, 0.3)',
                'neon-purple': '0 0 20px rgba(147, 51, 234, 0.3)',
                'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
                'glow': '0 0 30px rgba(59, 130, 246, 0.5)',
                'glow-lg': '0 0 50px rgba(59, 130, 246, 0.7)',
                'inner-neon': 'inset 0 0 20px rgba(59, 130, 246, 0.2)'
            },
            // Extensions de text-shadow
            textShadow: {
                'sm': '0 1px 2px rgba(0,0,0,0.1)',
                'md': '0 2px 4px rgba(0,0,0,0.1)',
                'lg': '0 4px 8px rgba(0,0,0,0.1)',
                'xl': '0 8px 16px rgba(0,0,0,0.1)',
                'neon': '0 0 5px currentColor, 0 0 10px currentColor',
                'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor'
            },
            // Extensions de backdrop-filter
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
                '3xl': '32px',
            },
            // Extensions de perspective
            perspective: {
                'none': 'none',
                '100': '100px',
                '200': '200px',
                '300': '300px',
                '400': '400px',
                '500': '500px',
                '1000': '1000px',
            },
            // Extensions de transform
            transformStyle: {
                '3d': 'preserve-3d',
            },
            // Extensions pour les animations de scroll
            scrollBehavior: {
                'smooth': 'smooth',
            }
    	}
    },
    plugins: [
        require("tailwindcss-animate"),
        // Plugin pour text-shadow si besoin
        function({ addUtilities, theme }) {
            const textShadows = {};
            Object.entries(theme('textShadow')).forEach(([key, value]) => {
                textShadows[`.text-shadow-${key}`] = { textShadow: value };
            });
            addUtilities(textShadows);
        }
    ],
}