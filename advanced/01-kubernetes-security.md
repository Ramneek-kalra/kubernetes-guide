# Kubernetes Security

Security in Kubernetes is achieved through various mechanisms:
- **Role-Based Access Control (RBAC)**: Manages permissions.
- **Secrets**: Stores sensitive information securely.
- **Network Policies**: Controls network traffic.

## Example: Creating a Secret
```bash
kubectl create secret generic my-secret --from-literal=password=my-password
kubectl get secrets
```

## Example: Applying an RBAC Policy
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
```

---

📝 **Next Step:** [Custom Resource Definitions](02-custom-resource-definitions.md)
