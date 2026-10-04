/**
 * NMMUN — 17TH EDITION (NARSEE MONJEE MODEL UNITED NATIONS)
 * Lightweight Vanilla JavaScript
 * Features: Mobile drawer, modal popups, interactive journey timeline,
 * scroll header elevation, active link tracking, accessible keyboard handlers.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA STORE FOR COMMITTEES (Easily editable for future updates)
  // ==========================================================================
  const committeeData = {
    unsc: {
      name: "UN Security Council",
      abbrev: "UNSC — Plenary Crisis Chamber",
      symbolSvg: `<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="14" stroke="#60a5fa" stroke-width="1.5"/><path d="M9 16L13 20L23 10" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      desc: "Charged with maintaining international peace and security under the UN Charter. Delegates handle real-time crisis directives, veto negotiations among permanent members (P5), and swift presidential statements.",
      agenda: "[Provisional Agenda: Mitigating Sovereign Conflict & Safeguarding Maritime Corridors in Disputed Waters]",
      matrix: "Single / Double Del",
      size: "15 Member States",
      guide: "Releasing Soon"
    },
    unga: {
      name: "UN General Assembly",
      abbrev: "UNGA — First Committee (DISEC)",
      symbolSvg: `<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="5" y="6" width="22" height="20" rx="3" stroke="#fb7185" stroke-width="1.5"/><line x1="10" y1="12" x2="22" y2="12" stroke="#fb7185" stroke-width="1.5"/><line x1="10" y1="17" x2="18" y2="17" stroke="#fb7185" stroke-width="1.5"/></svg>`,
      desc: "The universal parliament of nations where sovereign equality prevails. Delegates negotiate disarmament, non-proliferation treaties, and international guidelines against emerging warfare technologies.",
      agenda: "[Provisional Agenda: Establishing Global Norms on Autonomous Weaponry and Cross-Border Cyber Conflicts]",
      matrix: "Single Delegation",
      size: "45–60 Member States",
      guide: "Releasing Soon"
    },
    unhrc: {
      name: "UN Human Rights Council",
      abbrev: "UNHRC — Specialized Humanitarian Organ",
      symbolSvg: `<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="11" r="5" stroke="#ffffff" stroke-width="1.5"/><path d="M6 25C6 19.477 10.477 15 16 15C21.523 15 26 19.477 26 25" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      desc: "Mandated to protect and uphold fundamental liberties worldwide. Discusses the rights of vulnerable populations, humanitarian intervention protocols, and institutional accountability for human rights abuses.",
      agenda: "[Provisional Agenda: Framework for Climate-Induced Displacements and Cross-Border Asylum Protections]",
      matrix: "Single Delegation",
      size: "35–45 Member States",
      guide: "Releasing Soon"
    },
    who: {
      name: "World Health Organization",
      abbrev: "WHO — Global Health Assembly",
      symbolSvg: `<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="13" stroke="#60a5fa" stroke-width="1.5"/><path d="M16 8V24M8 16H24" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      desc: "Formulates global public health directives, epidemic emergency response systems, patent flexibility for essential therapeutics, and medical infrastructure support for emerging economies.",
      agenda: "[Provisional Agenda: Sovereign Preparedness and Patent Waivers for Future Global Pandemic Responses]",
      matrix: "Single / Double Del",
      size: "30–40 Member States",
      guide: "Releasing Soon"
    },
    ipc: {
      name: "International Press Corps",
      abbrev: "IPC — Fourth Estate & Media Syndicate",
      symbolSvg: `<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M6 8H26V24H6z" stroke="#fb7185" stroke-width="1.5"/><line x1="10" y1="12" x2="22" y2="12" stroke="#fb7185" stroke-width="1.5"/><line x1="10" y1="16" x2="18" y2="16" stroke="#fb7185" stroke-width="1.5"/></svg>`,
      desc: "The critical watchdog of NMMUN. Journalists, columnists, and investigative reporters examine confidential caucus chits, question committee blocs in press conferences, and publish the official daily gazette.",
      agenda: "[Mandate: Real-Time Investigative Reporting, Press Conferences & Daily Edition Gazettes]",
      matrix: "Single Delegate (Journalist/Editor)",
      size: "15–20 Journalists",
      guide: "Releasing Soon"
    },
    custom: {
      name: "[Specialized Committee Placeholder]",
      abbrev: "[ECOSOC / Historic Crisis Chamber]",
      symbolSvg: `<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><polygon points="16 4 20 12 28 13 22 19 24 28 16 23 8 28 10 19 4 13 12 12 16 4" stroke="#fde047" stroke-width="1.5"/></svg>`,
      desc: "[This committee slot is reserved for an additional specialized or continuous crisis simulation. The Executive Board and Secretariat will reveal the official mandate, timeline, and rules of procedure here.]",
      agenda: "[Official Agenda To Be Released by NMIMS NMMUN Secretariat]",
      matrix: "[Single / Double Del]",
      size: "[To Be Announced]",
      guide: "[Pending Announcement]"
    }
  };

  // ==========================================================================
  // 2. STICKY NAVBAR ELEVATION ON SCROLL
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMobileMenu = (isOpen) => {
    const shouldOpen = isOpen !== undefined ? isOpen : mobileToggle.getAttribute('aria-expanded') !== 'true';
    mobileToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    mobileDrawer.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
    mobileDrawer.classList.toggle('open', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  // Close mobile drawer when any link is tapped
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  // ==========================================================================
  // 4. ACTIVE NAVIGATION LINK SPY
  // ==========================================================================
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 140;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ==========================================================================
  // 5. THE DELEGATE JOURNEY TIMELINE INTERACTION
  // ==========================================================================
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const timelineProgress = document.getElementById('timelineProgress');

  const setTimelineStep = (stepNumber) => {
    timelineSteps.forEach(step => {
      const stepIndex = parseInt(step.getAttribute('data-step'), 10);
      if (stepIndex <= stepNumber) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    if (timelineProgress) {
      // Step percentage calculation (step 1 = 25%, step 2 = 50%, etc.)
      const percentage = (stepNumber / timelineSteps.length) * 100;
      timelineProgress.style.width = `${percentage}%`;
    }
  };

  timelineSteps.forEach(step => {
    step.addEventListener('mouseenter', () => {
      const stepNumber = parseInt(step.getAttribute('data-step'), 10);
      setTimelineStep(stepNumber);
    });
    
    step.addEventListener('click', () => {
      const stepNumber = parseInt(step.getAttribute('data-step'), 10);
      setTimelineStep(stepNumber);
    });
  });

  // ==========================================================================
  // 6. COMMITTEE MODAL POPUP SYSTEM
  // ==========================================================================
  const committeeModal = document.getElementById('committeeModal');
  const closeCommitteeModalBtn = document.getElementById('closeCommitteeModal');
  const modalSecondaryBtn = document.getElementById('modalSecondaryBtn');
  const exploreButtons = document.querySelectorAll('.btn-explore');

  // Modal elements to populate
  const modalTitle = document.getElementById('modalCommitteeTitle');
  const modalSubtitle = document.getElementById('modalCommitteeSubtitle');
  const modalSymbolBox = document.getElementById('modalSymbolBox');
  const modalDesc = document.getElementById('modalDesc');
  const modalAgenda = document.getElementById('modalAgenda');
  const modalMatrix = document.getElementById('modalMatrix');
  const modalSize = document.getElementById('modalSize');
  const modalGuide = document.getElementById('modalGuide');
  const modalRegisterBtn = document.getElementById('modalRegisterBtn');

  const openCommitteeModal = (committeeId) => {
    const data = committeeData[committeeId] || committeeData.custom;
    
    modalTitle.textContent = data.name;
    modalSubtitle.textContent = data.abbrev;
    modalSymbolBox.innerHTML = data.symbolSvg;
    modalDesc.textContent = data.desc;
    modalAgenda.textContent = data.agenda;
    modalMatrix.textContent = data.matrix;
    modalSize.textContent = data.size;
    modalGuide.textContent = data.guide;

    committeeModal.classList.add('open');
    committeeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCommitteeModal = () => {
    committeeModal.classList.remove('open');
    committeeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  exploreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const committeeId = btn.getAttribute('data-committee-id');
      openCommitteeModal(committeeId);
    });
  });

  if (closeCommitteeModalBtn) {
    closeCommitteeModalBtn.addEventListener('click', closeCommitteeModal);
  }
  if (modalSecondaryBtn) {
    modalSecondaryBtn.addEventListener('click', closeCommitteeModal);
  }
  if (modalRegisterBtn) {
    modalRegisterBtn.addEventListener('click', () => {
      closeCommitteeModal();
    });
  }

  // Backdrop click to close committee modal
  committeeModal.addEventListener('click', (e) => {
    if (e.target === committeeModal) {
      closeCommitteeModal();
    }
  });

  // ==========================================================================
  // 7. REGISTRATION MODAL POPUP
  // ==========================================================================
  const registerModal = document.getElementById('registerModal');
  const openRegisterModalBtn = document.getElementById('openRegisterModal');
  const closeRegisterModalBtn = document.getElementById('closeRegisterModal');
  const closeRegModalBtn = document.getElementById('closeRegModalBtn');

  const openRegModal = () => {
    registerModal.classList.add('open');
    registerModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeRegModal = () => {
    registerModal.classList.remove('open');
    registerModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openRegisterModalBtn) {
    openRegisterModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openRegModal();
    });
  }

  if (closeRegisterModalBtn) {
    closeRegisterModalBtn.addEventListener('click', closeRegModal);
  }
  if (closeRegModalBtn) {
    closeRegModalBtn.addEventListener('click', closeRegModal);
  }

  registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) {
      closeRegModal();
    }
  });

  // ==========================================================================
  // 8. GLOBAL ESCAPE KEY HANDLER (For all open modals)
  // ==========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (committeeModal.classList.contains('open')) {
        closeCommitteeModal();
      }
      if (registerModal.classList.contains('open')) {
        closeRegModal();
      }
      if (mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    }
  });

  // ==========================================================================
  // 9. AUTOMATIC CURRENT YEAR UPDATE
  // ==========================================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 10. INTERSECTION OBSERVER FOR GENTLE SCROLL REVEALS
  // ==========================================================================
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.pillar-card, .exp-card, .committee-card, .about-narrative-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    scrollObserver.observe(el);
  });

  // Handle observed elements becoming visible
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.pillar-card.visible, .exp-card.visible, .committee-card.visible, .about-narrative-card.visible').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, { passive: true });

});
