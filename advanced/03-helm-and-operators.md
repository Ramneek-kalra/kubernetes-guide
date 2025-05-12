# Helm and Operators

Helm is a package manager for Kubernetes that simplifies application management. Operators extend Kubernetes functionality by automating application-specific tasks.

## Example: Installing Helm
```bash
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
```

## Example: Using a Helm Chart
```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/nginx
```

---

📝 **Next Step:** [Kubernetes Monitoring](04-kubernetes-monitoring.md)
