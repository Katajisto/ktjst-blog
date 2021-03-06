---
title: Uusi Emacs configini
date: 2020-08-15T15:55:55.642Z
description: Päätin uudelleenconffata emacsini koulun aloituksen kunniaksi. Saa
  käyttää jos huvittaa.
---
### Uses the gopls LSP.

```
; KTJST Emacs config. Finally decided to write my own from scratch. 

; Thanks for this excellent post: https://buutticonsulting.com/2019/11/01/emacsin-alkeet-osa-1/

(require 'package)
(add-to-list
 'package-archives
 
 '("melpa" . "http://melpa.org/packages/"))


(unless package--initialized (package-initialize))

(unless (package-installed-p 'use-package)
  (package-refresh-contents)

  (package-install 'use-package))

(use-package helm

  :ensure t

  :bind (("M-x" . helm-M-x)

     ("C-x C-f" . helm-find-files)

     ("C-x b" . helm-mini)

     :map helm-map 

     ("<tab>" . helm-execute-persistent-action)

     ("C-z" . helm-select-action)

     :map helm-find-files-map

     ("<DEL>" . helm-ff-delete-char-backward)

     ("C-<backspace>" . helm-find-files-up-one-level)

     :map helm-read-file-map

     ("<DEL>" . helm-ff-delete-char-backward)

     ("C-<backspace>" . helm-find-files-up-one-level))

  :init (helm-mode 1))

(add-to-list 'default-frame-alist '(fullscreen . maximized))

(use-package magit

  :ensure t

  :bind (("C-x g" . magit-status)))

; Auto update packages.

(use-package auto-package-update

  :ensure t

  :config (setq auto-package-update-delete-old-versions t

               auto-package-update-interval 4)

  (auto-package-update-maybe))

; Get many packages

(use-package web-mode)

(use-package rjsx-mode)

(use-package prettier-js)

(use-package go-mode)

(use-package auto-complete)

(use-package all-the-icons)

(use-package go-mode)

(use-package go-autocomplete)


(use-package naysayer-theme)
(load-theme 'naysayer t)
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(package-selected-packages
   (quote
    (yasnippet company lsp-ui lsp-mode auto-package-update helm use-package web-mode svelte-mode rjsx-mode prettier-js neotree naysayer-theme magit go-mode fira-code-mode emmet-mode auto-complete all-the-icons))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )

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

(add-to-list 'auto-mode-alist '(".*.js" . rjsx-mode))
(add-to-list 'auto-mode-alist '(".*.svelte" . rjsx-mode))


(setq helm-display-header-line nil) ;; t by default
(set-face-attribute 'helm-source-header nil :height 0.1)
(helm-autoresize-mode 1)
(setq helm-autoresize-max-height 30)

(set-face-attribute 'helm-selection nil 
                    :background "#E6DB74"
                    :foreground "#062329")

(add-hook 'go-mode-hook
          (lambda ()
            (setq indent-tabs-mode 1)
            (setq tab-width 2)))

(setq-default indent-tabs-mode nil) ; Use spaces instead of tabs
(setq tab-width 2)                  ; Four spaces is a tab
(setq visible-bell nil)             ; Disable annoying visual bell graphic
(setq ring-bell-function 'ignore)   ; Disable super annoying audio bell

(global-set-key "\M-g" 'goto-line)

(use-package lsp-mode
  :ensure t
  :commands (lsp lsp-deferred)
  :hook (go-mode . lsp-deferred))

;; Set up before-save hooks to format buffer and add/delete imports.
;; Make sure you don't have other gofmt/goimports hooks enabled.
(defun lsp-go-install-save-hooks ()
  (add-hook 'before-save-hook #'lsp-format-buffer t t)
  (add-hook 'before-save-hook #'lsp-organize-imports t t))
(add-hook 'go-mode-hook #'lsp-go-install-save-hooks)

;; Optional - provides fancier overlays.
(use-package lsp-ui
  :ensure t
  :commands lsp-ui-mode)

;; Company mode is a standard completion package that works well with lsp-mode.
(use-package company
  :ensure t
  :config
  ;; Optionally enable completion-as-you-type behavior.
  (setq company-idle-delay 0)
  (setq company-minimum-prefix-length 1))

;; Optional - provides snippet support.
(use-package yasnippet
  :ensure t
  :commands yas-minor-mode
  :hook (go-mode . yas-minor-mode))

```