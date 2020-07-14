---
title: Emacs configuraationi
date: 2020-06-05T05:10:11.973Z
description: Copy pastettu emacs config webbidevaukseen ja muuhun, lähinnä omaan
  käyttöön. Käytä jos huvittaa.
---
Koska emas on vaan se paras editori ihan mihin vaan, dont @ me.

```
(require 'package)
(let* ((no-ssl (and (memq system-type '(windows-nt ms-dos))
                    (not (gnutls-available-p))))
       (proto (if no-ssl "http" "https")))
  (when no-ssl (warn "\
Your version of Emacs does not support SSL connections,
which is unsafe because it allows man-in-the-middle attacks.
There are two things you can do about this warning:
1. Install an Emacs version that does support SSL and be safe.
2. Remove this warning from your init file so you won't see it again."))
  (add-to-list 'package-archives (cons "melpa" (concat proto "://melpa.org/packages/")) t)
  ;; Comment/uncomment this line to enable MELPA Stable if desired.  See `package-archive-priorities`
  ;; and `package-pinned-packages`. Most users will not need or want to do this.
  ;;(add-to-list 'package-archives (cons "melpa-stable" (concat proto "://stable.melpa.org/packages/")) t)
  )
(package-initialize)
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-enabled-themes (quote (naysayer)))
 '(custom-safe-themes
   (quote
    ("5d59bd44c5a875566348fa44ee01c98c1d72369dc531c1c5458b0864841f887c" default)))
 '(package-selected-packages
   (quote
    (go-mode all-the-icons neotree auto-complete prettier-js rjsx-mode naysayer-theme))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
(add-to-list 'auto-mode-alist '(".*.js" . rjsx-mode))

(require 'neotree)
(global-set-key [f8] 'neotree-toggle)
(require 'all-the-icons)
(setq neo-theme (if (display-graphic-p) 'icons 'arrow))
(setq neo-window-fixed-size nil)
(eval-after-load "neotree"
    '(add-to-list 'window-size-change-functions
                  (lambda (frame)
                    (let ((neo-window (neo-global--get-window)))
                      (unless (null neo-window)
                        (setq neo-window-width (window-width neo-window)))))))
(require 'prettier-js)
(add-hook 'rjsx-mode-hook 'prettier-js-mode)
(tool-bar-mode -1)
(toggle-scroll-bar -1)
(menu-bar-mode -1) 
(when (version<= "26.0.50" emacs-version )
  (global-display-line-numbers-mode))
(ac-config-default)

(defun my-setup-indent (n)
  ;; java/c/c++
  (setq-local c-basic-offset n)
  ;; web development
  (setq-local coffee-tab-width n) ; coffeescript
  (setq-local javascript-indent-level n) ; javascript-mode
  (setq-local js-indent-level n) ; js-mode
  (setq-local rjsx-basic-offset n)
  (setq-local rjsx-indent-level n)
  (setq-local web-mode-markup-indent-offset n) ; web-mode, html tag in html file
  (setq-local web-mode-css-indent-offset n) ; web-mode, css in html file
  (setq-local web-mode-code-indent-offset n) ; web-mode, js code in html file
  (setq-local css-indent-offset n) ; css-mode
  )

(defun code-style ()
  (interactive)
  (message "KTJST!")
  ;; use space instead of tab
  (setq indent-tabs-mode nil)
  ;; indent 2 spaces width
  (my-setup-indent 2))

(add-hook 'prog-mode-hook 'code-style)
(add-hook 'web-mode-hook 'code-style)

```